import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { resolve } from 'path';

@Injectable()
export class EnService {
  async getAll() {
    const json = await JSON.parse(
      readFileSync(resolve(__dirname, 'data', 'en-V2.json'), {
        encoding: 'utf8',
      }),
    );
    return json;
  }
}
