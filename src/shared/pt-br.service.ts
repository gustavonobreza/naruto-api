import { Injectable } from '@nestjs/common';

import { Character } from '../characters/character.entity';
import { data as rawCharacters } from './data/pt/prod-V5b.json';

import { Clan } from 'src/clans/clan.entity';
import { data as rawClans } from './data/pt/clans-prod.json';

const cache: {
  getAllCharacters: Character[];
  getCharacterById: Character[];
  getAllClans: Clan[];
  getClanById: Clan[];
} = {
  getAllCharacters: null,
  getCharacterById: [],
  getAllClans: null,
  getClanById: [],
};

@Injectable()
export class PtBrService {
  async getAllCharacters(): Promise<Character[]> {
    if (!cache.getAllCharacters) {
      cache.getAllCharacters = rawCharacters;
    }

    return cache.getAllCharacters;
  }

  async getCharacterById(id: number): Promise<Character> {
    const userInCache = cache.getCharacterById.find(
      ({ id: _id }) => _id === id,
    );
    if (userInCache) return userInCache;

    const all = await this.getAllCharacters();
    const user = all.find(({ id: _id }) => _id === id);

    if (user) {
      cache.getCharacterById.push(user);
      return user;
    }

    return null;
  }

  async getAllClans(): Promise<Clan[]> {
    if (!cache.getAllClans) {
      cache.getAllClans = rawClans;
    }

    return cache.getAllClans;
  }

  async getClanById(id: number): Promise<Clan> {
    const clanInCache = cache.getClanById.find(({ id: _id }) => _id === id);
    if (clanInCache) {
      return clanInCache;
    }

    const all = await this.getAllClans();
    const clan = all.find(({ id: _id }) => _id === id);

    if (clan) {
      cache.getClanById.push(clan);
      return clan;
    }

    return null;
  }
}
