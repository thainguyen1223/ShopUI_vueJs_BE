import { Test, TestingModule } from '@nestjs/testing';
import { RequireClothesController } from './require-clothes.controller';

describe('RequireClothesController', () => {
  let controller: RequireClothesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RequireClothesController],
    }).compile();

    controller = module.get<RequireClothesController>(RequireClothesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
