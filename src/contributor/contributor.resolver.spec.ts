import { Test, TestingModule } from '@nestjs/testing';
import { ContributorResolver } from './contributor.resolver';
import { ContributorService } from './contributor.service';

describe('ContributorResolver', () => {
  let resolver: ContributorResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContributorResolver, ContributorService],
    }).compile();

    resolver = module.get<ContributorResolver>(ContributorResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
