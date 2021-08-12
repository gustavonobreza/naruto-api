import { Injectable } from '@nestjs/common';
import { data as raw } from './data/pt/prod-V5b.json';

import { Character } from '../characters/character.entity';

const cache: { getAll: Character[]; getById: Character[] } = {
  getAll: null,
  getById: [],
};

@Injectable()
export class PtBrService {
  async getAllCharacters(): Promise<Character[]> {
    if (!cache.getAll) {
      cache.getAll = raw;
    }

    return cache.getAll;
  }

  async getCharacterById(id: number): Promise<Character> {
    const userInCache = cache.getById.find(({ id: _id }) => _id === id);
    if (userInCache) return userInCache;

    const all = await this.getAllCharacters();
    const user = all.find(({ id: _id }) => _id === id);

    if (user) {
      cache.getById.push(user);
      return user;
    }

    return null;
  }
}
