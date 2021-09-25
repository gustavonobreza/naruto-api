import { Module } from '@nestjs/common';
import { BijusController } from './bijus.controller';
import { BijusService } from './bijus.service';

@Module({
  controllers: [BijusController],
  providers: [BijusService],
})
export class BijusModule {}
