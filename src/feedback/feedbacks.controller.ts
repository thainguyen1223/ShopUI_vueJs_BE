import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from "@nestjs/common";
import { ObjectId } from "mongoose";
import { User } from "src/users/schemas/users.schema";
import { CreateFeedBackDto } from "./dto/create-feedbacks-dto";
import { UpdateEventDto } from "./dto/update-feedbacks-dto";
import { FeedbackService } from "./feedbacks.service";
import { FeedBack} from "./schemas/feedbacks.schema";

@Controller("feedback")
export class FeedBacksController {
  constructor(private feedbackService: FeedbackService) {}
  //get(i_d)
  @Get("/:_id")
  showFeedBack(@Param() _id: ObjectId): Promise<FeedBack> {
    return this.feedbackService.show(_id);
  }

  @Get("")
  showAllFeedBack(@Query("limit") limit: number, @Query("page") page: number): Promise<FeedBack[]> {
    return this.feedbackService.showAll(page, limit );
  }

  @Post("")
  storeFeedBack(@Body() createFeedBackDto: CreateFeedBackDto): Promise<FeedBack> {
    return this.feedbackService.create(createFeedBackDto);
  }
}
