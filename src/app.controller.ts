import { Controller, Get, Redirect } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Redirect('/api/v1/characters')
  redirect() {
    return {};
  }
}
