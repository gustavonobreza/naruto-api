import { Injectable } from '@nestjs/common';
import { PtBrService } from 'src/shared/pt-br.service';

import { Character } from '../shared/character.entity';

@Injectable()
export class CharactersService {
  async findAll(max = 50, start = 1): Promise<Character[]> {
    return (await new PtBrService().getAll()).slice(start - 1, max);
  }

  async findOne(id: number): Promise<Character> {
    return {
      ...(await new PtBrService().getAll()).find(
        ({ id: idInd }) => id === idInd,
      ),
    };
  }
}
