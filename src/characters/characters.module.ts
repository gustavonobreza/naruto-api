import { Module } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CharactersController } from './characters.controller';
import { PtBrService } from 'src/shared/pt-br.service';
import { EnService } from 'src/shared/en.service';

@Module({
  imports: [PtBrService, EnService],
  controllers: [CharactersController],
  providers: [CharactersService],
})
export class CharactersModule {}
