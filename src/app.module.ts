import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CharactersModule } from './characters/characters.module';

@Module({
  imports: [CharactersModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
