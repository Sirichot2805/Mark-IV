import { Test, TestingModule } from '@nestjs/testing';
import { AraiController } from './arai.controller';
import { AraiService } from './arai.service';

describe('AraiController', () => {
  let controller: AraiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AraiController],
      providers: [AraiService],
    }).compile();

    controller = module.get<AraiController>(AraiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
