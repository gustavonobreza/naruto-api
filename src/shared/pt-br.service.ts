import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { Character } from './character.entity';

@Injectable()
export class PtBrService {
  async getAll(): Promise<Character[]> {
    const raw = await JSON.parse(
      readFileSync('src/shared/data/pt-br-V2.json', {
        encoding: 'utf8',
      }).toString(),
    );

    const names = Object.keys(raw);

    const serialized = names.map((name, ind) => ({
      id: ind + 1,
      name,
      ...raw[name],
    }));

    // console.log(serialized.find(({ name }) => name === 'Naruto Uzumaki'));
    return serialized;
  }
}
