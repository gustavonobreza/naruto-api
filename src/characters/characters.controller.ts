import { Controller, Get, Param, Query, ParseIntPipe } from '@nestjs/common';

import { serializeStringToInteger } from 'src/shared/helper/serialize-string-numeric';
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
      return await this.charactersService.findByName(name);
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
  async findOne(@Param('index', ParseIntPipe) index: number) {
    return await this.charactersService.findOneById(index);
  }
}
