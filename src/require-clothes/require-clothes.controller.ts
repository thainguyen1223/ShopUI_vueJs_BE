
import { Controller, Get, Post, Req, Param, Delete, Patch, Body, ParseIntPipe, Query } from "@nestjs/common";
import { ObjectId } from 'mongoose';
import { RequireClothesService } from "./require-clothes.service";
import { RequireClothes } from "./schemas/require-clothes";
import { CreateRequireClothesDto } from "./dto/create-require-clothes-dto";
import { UpdateRequireClothesDto } from "./dto/update-require-clothes-dto";
@Controller('require-clothes')
export class RequireClothesController {
    constructor(private requireClothesService:RequireClothesService ) {}

    @Get('/:_id')
    showRequireClothes(@Param() _id:ObjectId) :Promise<RequireClothes>{
        return this.requireClothesService.show(_id)
    }

    @Get("")
    showAllRequireClothes(@Query("limit") limit: number, @Query("page") page: number): Promise<RequireClothes[]> {
      return this.requireClothesService.showAll(page, limit );
    }
    
    @Post("")
    storeClothes(@Body() createRequireClothesDto: CreateRequireClothesDto): Promise<RequireClothes> {
      return this.requireClothesService.create(createRequireClothesDto);
    }
    
    @Patch("/:_id")
    updateClothes(@Body()updateRequireClothesDto: UpdateRequireClothesDto, @Param() _id: ObjectId): Promise<RequireClothes> {
      return this.requireClothesService.update(updateRequireClothesDto, _id);
    }

    
  @Delete("/:_id")
  deleteClothes(@Param() _id: ObjectId): Promise<RequireClothes> {
    return this.requireClothesService.delete(_id);
  }
}
