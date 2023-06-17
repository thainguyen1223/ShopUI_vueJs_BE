import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { User } from "src/users/schemas/users.schema";
import { CreateFeedBackDto } from "./dto/create-feedbacks-dto";
import { UpdateEventDto } from "./dto/update-feedbacks-dto";
import { FeedBack, FeedBacksDocument } from "./schemas/feedbacks.schema";

@Injectable()
export class FeedbackService {
  // constructor(
  //   @Inject("Event_MODEL")
  //   private NewModel: Model<News>,
  //   private userService: UserService,
  // ) {}
  constructor(@InjectModel(FeedBack.name) private FeedBackModel: Model<FeedBacksDocument>) {}

  async create(createFeedBackDto: CreateFeedBackDto): Promise<FeedBack | any> {
    const createFeedBack = new this.FeedBackModel(createFeedBackDto);
    //await createEvent.populate("participants");
    return createFeedBack.save();
  }
  //get = id:
  async show(_id: ObjectId): Promise<FeedBack> {
    return this.FeedBackModel.findById(_id).exec();
  }
  //get all
  async showAll(page: number, limit: number): Promise<any> {
    const data = await this.FeedBackModel.find()
      .limit(limit)
      .skip(limit * (page - 1))
      .sort({ sendDate: "desc" })
      .exec();

    const count = await this.FeedBackModel.find().count();
    return { data: data, total: count };
    //return this.EventModel.find().populate("users").exec();
  }
}
