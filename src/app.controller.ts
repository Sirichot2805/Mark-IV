import { Body, Controller, ForbiddenException, Get, HttpException, HttpStatus, Post, UseFilters, } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): any {
    return "TKO internal pruksa project api version 1.";
  }

}