import { PtBrService as PTService } from '../../shared/pt-br.service';
import { Character } from './character.entity';

const _offset = 0;
const _limit = 50;

export type IQuery = {
  offset?: number;
  limit?: number;
};

export class CharactersService {
  private readonly dataService: PTService = new PTService();

  async findAll({ offset, limit }: IQuery = {}): Promise<Character[]> {
    offset ??= _offset;
    limit ??= _limit;

    const allCharacter = await this.dataService.getAllCharacters();
    const skip = allCharacter.slice(offset, allCharacter.length - 1);
    const limited = skip.slice(0, limit);

    return limited;
  }

  async findOneById(id: number): Promise<Character | null> {
    const character = await this.dataService.getCharacterById(id);

    if (!character) {
      // throw new NotFoundException('Character not found');
      return null;
    }

    return character;
  }

  async findByName(name: string): Promise<Character[]> {
    const normalizedName = name.split(' ').map((name) =>
      name
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase(),
    );

    const all = await this.findAll();

    const normalizedNames = all.map(({ name }, id): [number, string] => [
      id,
      name
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase(),
    ]);

    let exactlyMatchId: number | undefined;
    // ????
    const scores = [];
    const alternatives: any[] = [];

    for (let i = 0; i < normalizedNames.length; i++) {
      const [id, name] = normalizedNames[i];

      let points = 0;

      if (name.toLowerCase() === normalizedName.join(' ')) {
        exactlyMatchId = id;
        break;
      }

      const splittedNames = name.split(' ');

      normalizedName.forEach((_name) => {
        const includes = splittedNames.filter(
          (__name) => __name === _name,
        ).length;
        if (includes) points++;
      });

      if (points > 0) {
        // console.log(name, 'e', normalizedName.join(' '));
        scores.push({ points, id });
      }

      normalizedName.forEach((_name) => {
        const includes = splittedNames.filter((__name) =>
          __name.match(_name),
        ).length;
        if (includes) {
          alternatives.push(id);
        }
      });
    }

    const semiMatch = scores.map(({ id }) => all[id]);
    const alternativeMatch = alternatives.map((alt) => all[alt]);

    const find =
      (exactlyMatchId as number) + 10
        ? [all[exactlyMatchId as number]]
        : semiMatch.length
          ? semiMatch
          : alternativeMatch;

    if (!find.length) {
      // NotFoundException
      return Promise.reject(new Error('Character not found'));
    }

    return find;
  }

  async sortPopular({ offset, limit }: IQuery = {}): Promise<Character[]> {
    offset ??= _offset;
    limit ??= _limit;

    const allCharacter = await this.dataService.getByPopularity();
    const skip = allCharacter.slice(offset, allCharacter.length - 1);
    const limited = skip.slice(0, limit);

    return limited;
  }
}
