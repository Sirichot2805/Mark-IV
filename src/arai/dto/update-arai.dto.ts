import { PartialType } from '@nestjs/mapped-types';
import { CreateAraiDto } from './create-arai.dto';

export class UpdateAraiDto extends PartialType(CreateAraiDto) {}
