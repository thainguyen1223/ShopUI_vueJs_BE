import { Test, TestingModule } from '@nestjs/testing';
import { RequireClothesService } from './require-clothes.service';

describe('RequireClothesService', () => {
  let service: RequireClothesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequireClothesService],
    }).compile();

    service = module.get<RequireClothesService>(RequireClothesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
