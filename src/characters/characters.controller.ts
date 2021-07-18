import { Controller, Get, Param, Query } from '@nestjs/common';
import { isString } from 'class-validator';
import { someNumberInString } from 'src/shared/helper/some-number-in-string';
import { CharactersService } from './characters.service';

interface IQueryString {
  name?: string;
}

@Controller('/api/v1/characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @Get()
  async findAll(@Query() query: IQueryString) {
    const { name } = query;
    const nameIsString = isString(name);
    const nameIsNumber = !!Number(name);
    if (name) {
      const haveNumberInString = someNumberInString(name);
      if (nameIsString && !nameIsNumber && !haveNumberInString) {
        const character = await this.charactersService.findOneByName(name);
        return character;
      }
    }

    const characters = await this.charactersService.findAll();
    return characters;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const seachByName = !parseInt(id);
    if (seachByName) {
      return await this.charactersService.findOneByName(id);
    }
    return await this.charactersService.findOneById(parseInt(id));
  }
}
