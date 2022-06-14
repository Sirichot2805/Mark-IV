import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { first } from 'rxjs';
import { CalSha256Service } from './cal-sha256.service';
import { CreateCalSha256Dto } from './dto/create-cal-sha256.dto';
import { UpdateCalSha256Dto } from './dto/update-cal-sha256.dto';


@Controller('cal-sha256')
export class CalSha256Controller {
  constructor(private readonly calSha256Service: CalSha256Service) {}

  // @Post()
  // create(@Body() createCalSha256Dto: CreateCalSha256Dto) {
  //   return this.calSha256Service.create(createCalSha256Dto);
  // }

  // @Get()
  // findAll() {
  //   return this.calSha256Service.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.calSha256Service.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCalSha256Dto: UpdateCalSha256Dto) {
  //   return this.calSha256Service.update(+id, updateCalSha256Dto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.calSha256Service.remove(+id);
  // }

  @Get('ARRtoSHA256')
  TranSHA256(@Body() body : any ){
    return this.calSha256Service.arrToSHA256(body.arr);
  }
}
