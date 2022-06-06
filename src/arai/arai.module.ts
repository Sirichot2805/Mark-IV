import { Module } from '@nestjs/common';
import { AraiService } from './arai.service';
import { AraiController } from './arai.controller';

@Module({
  controllers: [AraiController],
  providers: [AraiService]
})
export class AraiModule {}
