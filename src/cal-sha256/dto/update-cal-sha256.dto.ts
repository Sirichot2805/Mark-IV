import { PartialType } from '@nestjs/mapped-types';
import { CreateCalSha256Dto } from './create-cal-sha256.dto';

export class UpdateCalSha256Dto extends PartialType(CreateCalSha256Dto) {}
