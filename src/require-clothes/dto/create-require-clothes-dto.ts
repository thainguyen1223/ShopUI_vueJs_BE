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
  IsArray,
  isArray,
  ArrayNotEmpty
} from "class-validator";
import internal from "stream";

export class CreateRequireClothesDto {
  @IsString()
  @IsNotEmpty()
  firstname: string;

  @IsNotEmpty()
  @IsString()
  lastname: string;


  @IsString()
  @IsNotEmpty()
  street: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  additional: string;

  @IsArray()
  @ArrayNotEmpty()
  arraySp? : object[];
  // @IsString()
  // title?: string ;

  // @IsOptional()
  // @IsInt()
  // quantity?: number = 1;

  // @IsOptional()
  // @IsBooleanString()
  // new?: string = "true";


  // @IsOptional()
  // @IsBooleanString()
  // best?: string = "true";

  // @IsOptional()
  // @IsInt()
  // price?: number = 0;

  // @IsOptional()
  // @IsInt()
  // discount?: number = 0;

  // @IsArray()
  // @IsOptional()
  // category?: string[] ;
  // @IsArray()
  // @IsOptional()
  // images?: string[] ;

  // @IsString()
  // @IsOptional()
  // description?: string = '' ;

  // @IsArray()
  
  // @IsOptional()
  // color?: string[] ;

  // @IsArray()
  
  // @IsOptional()
  // size?: string[] ;
}
