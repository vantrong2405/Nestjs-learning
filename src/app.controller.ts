import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @Render('index')
  root() {
    // get data from services
    const data = this.appService.getHello();
    // pass data to the view template
    return { message: data };
  }
}
