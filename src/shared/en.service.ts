import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { resolve } from 'path';

@Injectable()
export class EnService {
  async getAll() {
    const json = await JSON.parse(
      readFileSync('src/shared/data/en/V3.json', {
        encoding: 'utf8',
      }),
    );
    return json;
  }
}
