import { Test, TestingModule } from '@nestjs/testing';
import { AraiService } from './arai.service';

describe('AraiService', () => {
  let service: AraiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AraiService],
    }).compile();

    service = module.get<AraiService>(AraiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
