import { CreateStatustypeInput } from './create-statustype.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateStatustypeInput extends PartialType(CreateStatustypeInput) {
  id: number;
}
