import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Statustype } from '@prisma/client';
import { StatustypeService } from './statustype.service';


@Resolver('Statustype')
export class StatustypeResolver {
  constructor(private readonly statustypeService: StatustypeService) {}

  @Mutation('createStatustype')
  create(@Args('id') id: number,@Args('name') name: string) {
    return this.statustypeService.create({id,name});
  }

  @Query('statustypes')
  findAll() {
    return  this.statustypeService.findAll();
  }

  @Query('statustype')
  findOne(@Args('id') id: number) {
    return this.statustypeService.findOne(id);
  }

  @Mutation('updateStatustype')
  update(@Args('id') id: number,@Args('name') name: string) {
    let data:Statustype = {
      id: null,
      name: name,
    }
    return this.statustypeService.update(id,data);
  }

  @Mutation('removeStatustype')
  remove(@Args('id') id: number) {
    return this.statustypeService.remove(id);
  }
}
