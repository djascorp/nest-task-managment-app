import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ContributorService } from './contributor.service';
import { CreateContributorInput } from './dto/create-contributor.input';
import { UpdateContributorInput } from './dto/update-contributor.input';

@Resolver('Contributor')
export class ContributorResolver {
  constructor(private readonly contributorService: ContributorService) {}

  @Mutation('createContributor')
  create(@Args('createContributorInput') createContributorInput: CreateContributorInput) {
    return this.contributorService.create(createContributorInput);
  }

  @Query('contributors')
  findAll() {
    return this.contributorService.findAll();
  }

  @Query('contributor')
  findOne(@Args('projectId') projectId: number,@Args('userId') userId) {
    return this.contributorService.findOne(projectId,userId);
  }

  @Mutation('updateContributor')
  update(@Args('updateContributorInput') updateContributorInput: UpdateContributorInput) {
    return this.contributorService.update( updateContributorInput);
  }

  @Mutation('removeContributor')
  remove(@Args('projectId') projectId: number,@Args('userId') userId) {
    return this.contributorService.remove(projectId,userId);
  }
}
