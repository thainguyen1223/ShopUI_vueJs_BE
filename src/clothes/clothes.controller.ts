
import { ClothesService } from './clothes.service';
import { Controller, Get, Post, Req, Param, Delete, Patch, Body, ParseIntPipe, Query } from "@nestjs/common";
import { ObjectId } from 'mongoose';
import { Clothes } from './schemas/clothes.schema';
import { CreateClothesDto } from './dto/create-clothes.dto';
import { UpdateClothesDto } from './dto/update-clothes.dto';

@Controller('clothes')
export class ClothesController {

    constructor(private clothesService: ClothesService) {}
    @Get("/:_id")
    showClothes(@Param() _id: ObjectId): Promise<Clothes> {
      return this.clothesService.show(_id);
    }

    @Get("")
    showAllClothes(@Query("limit") limit: number, @Query("page") page: number, @Query("queryFilter") queryFilter: string): Promise<Clothes[]> {
      return this.clothesService.showAll(page, limit, queryFilter );
    }

    @Post("")
    storeClothes(@Body() createClothesDto: CreateClothesDto): Promise<Clothes> {
      return this.clothesService.create(createClothesDto);
    }

    @Patch("/:_id")
    updateClothes(@Body()updateClothesDto: UpdateClothesDto, @Param() _id: ObjectId): Promise<Clothes> {
      return this.clothesService.update(updateClothesDto, _id);
    }

    
  @Delete("/:_id")
  deleteClothes(@Param() _id: ObjectId): Promise<Clothes> {
    return this.clothesService.delete(_id);
  }
}
