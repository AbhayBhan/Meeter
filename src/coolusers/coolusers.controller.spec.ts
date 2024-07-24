import { Test, TestingModule } from '@nestjs/testing';
import { CoolusersController } from './coolusers.controller';
import { CoolusersService } from './coolusers.service';

describe('CoolusersController', () => {
  let controller: CoolusersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoolusersController],
      providers: [CoolusersService],
    }).compile();

    controller = module.get<CoolusersController>(CoolusersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
