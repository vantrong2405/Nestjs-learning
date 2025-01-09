import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService
  ) {
    const dbUser = this.configService.get<string>('DB_USERNAME');
    console.log("🚀 ~ AppController ~ dbUser:", dbUser)
    const dbHost = this.configService.get<string>('PORT');
    console.log("🚀 ~ AppController ~ dbHost:", dbHost)
  }

  @Get()
  @Render('index')
  root() {
    // get data from services
    const data = this.appService.getHello();
    // pass data to the view template
    return { message: data };
  }
}
