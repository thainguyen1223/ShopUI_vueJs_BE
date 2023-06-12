import { Module } from '@nestjs/common';
import { ClothesController } from './clothes.controller';
import { ClothesService } from './clothes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Clothes, ClothesSchema } from './schemas/clothes.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Clothes.name, schema: ClothesSchema }])],
  controllers: [ClothesController],
  providers: [ClothesService]
})
export class ClothesModule {}
