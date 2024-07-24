import { Test, TestingModule } from '@nestjs/testing';
import { CoolusersService } from './coolusers.service';

describe('CoolusersService', () => {
  let service: CoolusersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoolusersService],
    }).compile();

    service = module.get<CoolusersService>(CoolusersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
