import { Module } from '@nestjs/common';
import { ClansService } from './clans.service';
import { ClansController } from './clans.controller';

@Module({
  controllers: [ClansController],
  providers: [ClansService]
})
export class ClansModule {}
