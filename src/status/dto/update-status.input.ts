import { CreateStatusInput } from './create-status.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateStatusInput extends PartialType(CreateStatusInput) {
  id: number;
}
