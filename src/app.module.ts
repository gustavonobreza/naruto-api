import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CharactersModule } from './characters/characters.module';
import { ClansModule } from './clans/clans.module';

@Module({
  imports: [CharactersModule, ClansModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
