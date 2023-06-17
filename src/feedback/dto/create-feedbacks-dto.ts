/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prettier/prettier */

import { IsArray, IsBooleanString, IsDateString, IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateFeedBackDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  subject: string;

  @IsString()
  @IsNotEmpty()
  message: string;

}
