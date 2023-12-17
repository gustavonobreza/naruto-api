import { Character } from '../characters/character.entity';
import { data as rawCharacters } from './data/pt/prod-V5b.json';

import { Clan } from 'src/clans/clan.entity';
import { data as rawClans } from './data/pt/clans-prod.json';

type ICache = {
  characters: Character[];
  characterById: Character[];
  clans: Clan[];
  clanById: Clan[];
};

const cache: ICache = {
  characters: [...(rawCharacters as any)],
  characterById: [],
  clans: [],
  clanById: [],
};

export class PtBrService {
  async getAllCharacters(): Promise<Character[]> {
    return cache.characters;
  }

  async getCharacterById(id: number): Promise<Character | null> {
    const userInCache = cache.characterById.find(({ id: _id }) => _id === id);
    if (userInCache) return userInCache;

    const all = await this.getAllCharacters();
    const user = all.find(({ id: _id }) => _id === id);

    if (user) {
      cache.characterById.push(user);
      return user;
    }

    return null;
  }

  async getAllClans(): Promise<Clan[]> {
    if (!cache.clans) {
      cache.clans = rawClans;
    }

    return cache.clans;
  }

  async getByPopularity(): Promise<Character[]> {
    const all = await this.getAllCharacters();

    const principles: Character[] = [];

    function getPupular(gname: string) {
      const found = all.find(({ name: _name }) => {
        return _name.toLowerCase().includes(gname.toLowerCase());
      });
      found && principles.push(found);
    }

    const selected = [
      'Naruto',
      'Sakura',
      'Sasuke',
      'Kakashi',
      'Maito',
      'Lee',
      'Hinata',
      'Shikamaru',
      'Temari',
      'Neji',
      'Asuma',
      'Boruto',
      'Deidara',
      'Gaara',
      'Hashirama',
      'Tobirama',
      'Ino',
      'Iruka',
      'Itachi',
      'Jiraiya',
      'Konohamaru',
      'Kushina',
      'Madara',
      'Minato',
      'Nagato',
      'Obito',
      'Sarada',
      'Shisui',
    ];

    selected.forEach((name) => getPupular(name));

    all.forEach((char) => {
      const found = principles.some(({ id: _id }) => char.id === _id);
      if (!found) {
        principles.push(char);
      }
    });

    return principles;
  }
  async getClanById(id: number): Promise<Clan | null> {
    const clanInCache = cache.clanById.find(({ id: _id }) => _id === id);
    if (clanInCache) {
      return clanInCache;
    }

    const all = await this.getAllClans();
    const clan = all.find(({ id: _id }) => _id === id);

    if (clan) {
      cache.clanById.push(clan);
      return clan;
    }

    return null;
  }
}
