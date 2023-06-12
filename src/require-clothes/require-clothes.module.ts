import { Module } from '@nestjs/common';
import { RequireClothesController } from './require-clothes.controller';
import { RequireClothesService } from './require-clothes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RequireClothes , RequireClothesSchema } from 'src/require-clothes/schemas/require-clothes';

@Module({
  imports: [MongooseModule.forFeature([{ name: RequireClothes.name, schema: RequireClothesSchema }])],
  controllers:[RequireClothesController],
  providers: [RequireClothesService]
})
export class RequireClothesModule {}
