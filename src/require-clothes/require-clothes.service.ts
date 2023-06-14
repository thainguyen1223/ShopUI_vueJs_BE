import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { RequireClothes, RequireClothesDocument } from "src/require-clothes/schemas/require-clothes";

import { Model, ObjectId } from "mongoose";
import { CreateRequireClothesDto } from "./dto/create-require-clothes-dto";
import { UpdateRequireClothesDto } from "./dto/update-require-clothes-dto";
@Injectable()
export class RequireClothesService {
  constructor(@InjectModel(RequireClothes.name) private RequireClothesModel: Model<RequireClothesDocument>) {}

  //get = id:
  async show(_id: ObjectId): Promise<RequireClothes> {
    return this.RequireClothesModel.findById(_id).exec();
  }
  //get all
  async showAll(page: number, limit: number): Promise<any> {
    const data = await this.RequireClothesModel.find()
    .limit(limit)
      .skip(limit * (page - 1))
      .sort({ sendDate: "desc" })
      .exec();

    const count = await this.RequireClothesModel.find().count();
    return { data: data, total: count };
    //return this.EventModel.find().populate("users").exec();
  }


    //  post
    async create(createRequireClothesDto: CreateRequireClothesDto): Promise<RequireClothes> {
        const createRequireClothes = new this.RequireClothesModel(createRequireClothesDto);
      console.log(createRequireClothes);
      
        return createRequireClothes.save();
    }
    //update = id
    async update(updateRequireClothesDto: UpdateRequireClothesDto, _id: ObjectId): Promise<RequireClothes> {
 

        await this.RequireClothesModel.findOneAndUpdate(_id, updateRequireClothesDto).exec();
    
        return this.RequireClothesModel.findById(_id).exec();
      }

      // delete = id
      async delete(_id: ObjectId): Promise<RequireClothes> {
        return this.RequireClothesModel.findOneAndDelete(_id).exec();
      }
}
