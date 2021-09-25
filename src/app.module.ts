import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BijusModule } from './bijus/bijus.module';
import { CharactersModule } from './characters/characters.module';
import { ClansModule } from './clans/clans.module';

@Module({
  imports: [CharactersModule, ClansModule, BijusModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
