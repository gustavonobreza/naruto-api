import { Controller, Get } from '@nestjs/common';
import { BijusService } from './bijus.service';

@Controller('/api/v1/bijus')
export class BijusController {
  constructor(private readonly bijusService: BijusService) {}

  @Get()
  getAll(): string {
    return this.bijusService.getAll();
  }
}
