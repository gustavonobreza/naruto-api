import { Injectable } from '@nestjs/common';
import { data as raw } from './data/pt/prod-V5.json';
import { join } from 'path';

import { Character } from '../characters/character.entity';

const cache: { getAll: Character[]; getById: Character[] } = {
  getAll: null,
  getById: [],
};

@Injectable()
export class PtBrService {
  async getAll(): Promise<Character[]> {
    if (!cache.getAll) {
      cache.getAll = raw;
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
