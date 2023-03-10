import { Test, TestingModule } from '@nestjs/testing';
import { StatustypeService } from './statustype.service';

describe('StatustypeService', () => {
  let service: StatustypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StatustypeService],
    }).compile();

    service = module.get<StatustypeService>(StatustypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
