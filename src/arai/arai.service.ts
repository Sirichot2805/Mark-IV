import { Injectable } from '@nestjs/common';
import { CreateAraiDto } from './dto/create-arai.dto';
import { UpdateAraiDto } from './dto/update-arai.dto';

@Injectable()
export class AraiService {
  create(createAraiDto: CreateAraiDto) {
    return 'This action adds a new arai';
  }

  findAll() {
    return `This action returns all arai`;
  }

  findOne(id: number) {
    return `This action returns a #${id} arai`;
  }

  update(id: number, updateAraiDto: UpdateAraiDto) {
    return `This action updates a #${id} arai`;
  }

  remove(id: number) {
    return `This action removes a #${id} arai`;
  }
}
