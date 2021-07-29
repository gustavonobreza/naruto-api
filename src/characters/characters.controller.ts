import { Controller, Get, Param, Query } from '@nestjs/common';
import { isNumberString } from 'class-validator';

import { serializeStringToInteger } from 'src/shared/helper/serialize-string-numeric';
import { isValidString } from 'src/shared/helper/is-valid-string';
import { CharactersService } from './characters.service';

@Controller('/api/v1/characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @Get()
  async findAll(
    @Query('name') name: string,
    @Query('offset') offset: string,
    @Query('limit') limit: string,
  ) {
    if (name) {
      console.log('name in query ->', name);

      return await this.findOne(name);
    }

    const offsetSerialized = serializeStringToInteger(offset);
    const limitSerialized = serializeStringToInteger(limit);

    const characters = await this.charactersService.findAll({
      offset: offsetSerialized,
      limit: limitSerialized,
    });

    return characters;
  }

  @Get(':index')
  async findOne(@Param('index') index: string) {
    const isNumeric = isNumberString(index);

    if (isNumeric) {
      const id = Number(index);
      return await this.charactersService.findOneById(id);
    }

    const isValidName = isValidString(index);
    if (isValidName) {
      const name = index.trim();
      console.log('para tuduuu =>', name);

      return await this.charactersService.findByName(name);
    }
  }
}
