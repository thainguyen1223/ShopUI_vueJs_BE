/* eslint-disable prettier/prettier */
import { Controller, Get, Request, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@Controller("profile")
export class ProfileController {
  // @UseGuards(JwtAuthGuard)
  // @Get()
  // getProfile(@Request() req) {
  //   return req.user;
  // }
}
