import { CreateContributorInput } from './create-contributor.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateContributorInput extends PartialType(CreateContributorInput) {
  
}
