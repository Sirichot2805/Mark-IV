import { Controller, Get, Param, Post } from '@nestjs/common';
import { get } from 'http';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): any {
    return this.appService.getHello();
  }

  // @Get(':someText')
  // getParamTest(@Param() params): string {
  //   return this.appService.getParamTest(params.someText);
  // }
}
