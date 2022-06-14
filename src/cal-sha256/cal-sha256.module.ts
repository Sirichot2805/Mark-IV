import { Module } from '@nestjs/common';
import { CalSha256Service } from './cal-sha256.service';
import { CalSha256Controller } from './cal-sha256.controller';

@Module({
  controllers: [CalSha256Controller],
  providers: [CalSha256Service]
})
export class CalSha256Module {}
