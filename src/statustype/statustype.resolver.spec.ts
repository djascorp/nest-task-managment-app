import { Test, TestingModule } from '@nestjs/testing';
import { StatustypeResolver } from './statustype.resolver';
import { StatustypeService } from './statustype.service';

describe('StatustypeResolver', () => {
  let resolver: StatustypeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StatustypeResolver, StatustypeService],
    }).compile();

    resolver = module.get<StatustypeResolver>(StatustypeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
