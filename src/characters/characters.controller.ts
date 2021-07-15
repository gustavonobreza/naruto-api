import { Controller, Get, Param } from '@nestjs/common';
import { CharactersService } from './characters.service';

@Controller('characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @Get()
  async findAll() {
    return await this.charactersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.charactersService.findOne(+id);
  }
}
