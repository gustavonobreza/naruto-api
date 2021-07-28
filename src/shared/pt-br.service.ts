import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { Character } from './character.entity';

let cache = null;

@Injectable()
export class PtBrService {
  async getAll(): Promise<Character[]> {
    if (!cache) {
      const raw = await JSON.parse(
        readFileSync('src/shared/data/pt/V3.json', {
          encoding: 'utf8',
        }).toString(),
      );
      cache = raw;
    }

    const names = Object.keys(cache);

    const serialized = names.map((name, ind) => ({
      id: ind + 1,
      name,
      ...cache[name],
    }));

    // console.log(serialized.find(({ name }) => name === 'Naruto Uzumaki'));
    return serialized;
  }
}
