import { readFileSync } from 'fs';

export class EnService {
  async getAll() {
    const json = await JSON.parse(
      readFileSync('src/shared/data/en/prod-V3a.json', {
        encoding: 'utf8',
      }),
    );
    return json;
  }
}
