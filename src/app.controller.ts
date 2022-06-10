import { Controller, Get, Param, Post } from '@nestjs/common';
import { get } from 'http';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): any {
    return this.appService.getHello();
  }
  @Get('/ddd')
  getHello2(): any {
    return this.appService.getHello2();
  }
  @Get('ab*cd')
  findAll() {
    return 'This route uses a wildcard';
  }



  // @Get(':someText')
  // getParamTest(@Param() params): string {
  //   return this.appService.getParamTest(params.someText);
  // }
}
;