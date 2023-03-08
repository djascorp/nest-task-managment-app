import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { StatusService } from './status.service';
import { CreateStatusInput } from './dto/create-status.input';
import { UpdateStatusInput } from './dto/update-status.input';

@Resolver('Status')
export class StatusResolver {
  constructor(private readonly statusService: StatusService) {}

  @Mutation('createStatus')
  create(@Args('createStatusInput') createStatusInput: CreateStatusInput) {
    return this.statusService.create(createStatusInput);
  }

  @Query('statuses')
  findAll() {
    return this.statusService.findAll();
  }

  @Query('status')
  findOne(@Args('id') id: number) {
    return this.statusService.findOne(id);
  }

  @Mutation('updateStatus')
  update(@Args('updateStatusInput') updateStatusInput: UpdateStatusInput) {
    return this.statusService.update(updateStatusInput.id, updateStatusInput);
  }

  @Mutation('removeStatus')
  remove(@Args('id') id: number) {
    return this.statusService.remove(id);
  }
}
