/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { FeedbackService } from "./feedbacks.service";
import { FeedBacksController } from "./feedbacks.controller";

import { UserModule } from "src/users/users.module";
import { MongooseModule } from "@nestjs/mongoose";
import { FeedBacksSchema, FeedBack } from "./schemas/feedbacks.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: FeedBack.name, schema: FeedBacksSchema }])],
  providers: [FeedbackService],
  controllers: [FeedBacksController],
})
export class FeedBacksModule {}
