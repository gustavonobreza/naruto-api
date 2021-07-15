import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { Character } from './character.entity';

const sortByname = ({ name: a1 }, { name: a2 }) =>
  a1 < a2 ? -1 : a1 > a2 ? 1 : 0;

const sortById = ({ id: a1 }, { id: a2 }) => a1 - a2;

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
