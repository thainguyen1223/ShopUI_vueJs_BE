/* eslint-disable prettier/prettier */

import {
  IsArray,
  IsBooleanString,
  IsDate,
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsObject,
  IsOptional,
  IsString,
  Max,
  Min,
  IsInt,
} from "class-validator";

export class CreateClothesDto {


  @IsString()
  @IsNotEmpty()
  title?: string ;

  @IsOptional()
  @IsInt()
  quantity?: number = 1;

  @IsOptional()
  @IsBooleanString()
  new?: string = "true";


  @IsOptional()
  @IsBooleanString()
  best?: string = "true";

  @IsOptional()
  @IsInt()
  price?: number = 0;

  @IsOptional()
  @IsInt()
  discount?: number = 0;

  @IsArray()
  @IsOptional()
  category?: string[] ;
  @IsArray()
  @IsOptional()
  images?: string[] ;

  @IsString()
  @IsOptional()
  description?: string = '' ;

  @IsArray()
  
  @IsOptional()
  color?: string[] ;

  @IsArray()
  
  @IsOptional()
  size?: string[] ;

}
