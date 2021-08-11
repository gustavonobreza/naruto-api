import { Injectable } from '@nestjs/common';

import { Character } from '../characters/character.entity';

const cache: { getAll: Character[]; getById: Character[] } = {
  getAll: null,
  getById: [],
};

@Injectable()
export class PtBrService {
  async getAll(): Promise<Character[]> {
    if (!cache.getAll) {
      const raw = require('src/shared/data/pt/prod-V4.json');
      cache.getAll = raw.data;
    }

    return cache.getAll;
  }

  async getById(id: number): Promise<Character> {
    const userInCache = cache.getById.find(({ id: _id }) => _id === id);
    if (userInCache) return userInCache;

    const all = await this.getAll();
    const user = all.find(({ id: _id }) => _id === id);

    if (user) {
      cache.getById.push(user);
      return user;
    }

    return null;
  }
}
