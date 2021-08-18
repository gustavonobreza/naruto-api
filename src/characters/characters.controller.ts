import { Controller, Get, Param, Query, ParseIntPipe } from '@nestjs/common';
import { isBooleanString } from 'class-validator';

import { serializeStringToInteger } from 'src/shared/helper/serialize-string-numeric';
import { CharactersService, IQuery } from './characters.service';

@Controller('/api/v1/characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @Get()
  async findAll(
    @Query('name') name: string,
    @Query('offset') offset: string,
    @Query('limit') limit: string,
    @Query('sort') sort: string,
  ) {
    const isSorted = isBooleanString(sort);
    const query: IQuery = {
      offset: serializeStringToInteger(offset),
      limit: serializeStringToInteger(limit),
    };

    if (name) {
      return await this.charactersService.findByName(name);
    }

    if (isSorted) {
      return await this.charactersService.sortPopulars(query);
    }

    const characters = await this.charactersService.findAll(query);

    return characters;
  }

  @Get(':index')
  async findOne(@Param('index', ParseIntPipe) index: number) {
    return await this.charactersService.findOneById(index);
  }
}
