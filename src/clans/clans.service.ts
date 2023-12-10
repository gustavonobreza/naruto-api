import { PtBrService } from '../shared/pt-br.service';
import { Clan } from './clan.entity';

const _offset = 0;
const _limit = 50;

export class ClansService {
  private readonly dataService: PtBrService = new PtBrService();

  async findAll({
    offset,
    limit,
  }: {
    offset?: number;
    limit?: number;
  } = {}): Promise<Clan[]> {
    offset ??= _offset;
    limit ??= _limit;

    const allClans = await this.dataService.getAllClans();
    const skip = allClans.slice(offset, allClans.length - 1);
    const limited = skip.slice(0, limit);

    return limited;
  }

  async findOneById(id: number): Promise<Clan> | null {
    const clan = await this.dataService.getClanById(id);

    if (!clan) {
      // throw new NotFoundException('Clan not found');
      return null;
    }

    return clan;
  }

  async findByName(name: string): Promise<Clan[]> {
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

    let exactlyMatchId: any;
    const scores = [];
    const alternatives = [];

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
      exactlyMatchId + 10
        ? [all[exactlyMatchId]]
        : semiMatch.length
          ? semiMatch
          : alternativeMatch;

    if (!find.length) {
      // throw new NotFoundException('Clan not found');

      return [];
    }

    return find;
  }
}
