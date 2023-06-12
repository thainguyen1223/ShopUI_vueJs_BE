/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prettier/prettier */

import {
  IsNumberString,
  IsBooleanString,
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsInt,
  IsArray
} from "class-validator";
import internal from "stream";

export class CreateRequireClothesDto {
  @IsString()
  @IsNotEmpty()
  Firstname: string;

  @IsNotEmpty()
  @IsString()
  Lastname: string;

  @IsDateString()
  @IsNotEmpty()
  startDate: string;

  @IsDateString()
  @IsNotEmpty()
  Street: string;

  @IsNotEmpty()
  @IsNumberString()
  phone: number;

  @IsNotEmpty()
  @IsNumberString()
  email: number;

  @IsBooleanString()
  @IsOptional()
  status: "true";

  @IsNotEmpty()
  @IsOptional()
  participants: string[];

  @IsNotEmpty()
  @IsString()
  additional: number;

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
