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


export class UpdateRequireClothesDto {
  @IsString()
  @IsNotEmpty()
  firstname: string;

  @IsNotEmpty()
  @IsString()
  lastname: string;

  @IsString()
  @IsNotEmpty()
  startDate: string;

  @IsString()
  @IsNotEmpty()
  Street: string;

  @IsNotEmpty()
  @IsString()
  phone: string;


  @IsNotEmpty()
  @IsString()
  additional: string;
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
  // category?: string[];
  // @IsArray()
  // @IsOptional()
  // images?: string[];

  // @IsString()
  // @IsOptional()
  // description?: string = "";

  // @IsArray()
  // @IsOptional()
  // color?: string[];

  // @IsArray()
  // @IsOptional()
  // size?: string[];
}
