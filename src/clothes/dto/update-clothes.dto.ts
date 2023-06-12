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

export class UpdateClothesDto {


  @IsString()
  @IsOptional()
  title?: string ;

  @IsOptional()
  @IsInt()
  quantity?: number ;

  @IsOptional()
  @IsBooleanString()
  new?: string ;


  @IsOptional()
  @IsBooleanString()
  best?: string ;

  @IsOptional()
  @IsInt()
  price?: number ;

  @IsOptional()
  @IsInt()
  discount?: number ;

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
