import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AraiService } from './arai.service';
import { CreateAraiDto } from './dto/create-arai.dto';
import { UpdateAraiDto } from './dto/update-arai.dto';

@Controller('arai')
export class AraiController {
  constructor(private readonly araiService: AraiService) {}

  @Post()
  create(@Body() createAraiDto: CreateAraiDto) {
    return this.araiService.create(createAraiDto);
  }

  @Get()
  findAll() {
    return this.araiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.araiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAraiDto: UpdateAraiDto) {
    return this.araiService.update(+id, updateAraiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.araiService.remove(+id);
  }
}
