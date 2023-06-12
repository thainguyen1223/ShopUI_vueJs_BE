import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Clothes, ClothesDocument } from './schemas/clothes.schema';
import { Model, ObjectId } from 'mongoose';
import { CreateClothesDto } from './dto/create-clothes.dto';
import { UpdateClothesDto } from './dto/update-clothes.dto';

@Injectable()
export class ClothesService {



    constructor(@InjectModel(Clothes.name) private ClothesModel: Model<ClothesDocument>) {}


    //  post
    async create(createClothesDto: CreateClothesDto): Promise<Clothes> {
        const createClothes = new this.ClothesModel(createClothesDto);
    
        return createClothes.save();
    }
;
    //get = id:
    async show(_id: ObjectId): Promise<Clothes> {
       
        return this.ClothesModel.findById(_id).exec();
      }

      //get all
      async showAll(page: number = 1, limit: number = 9, queryFilter: string = '' ): Promise<any> {
        let count;
        let data;
        if(queryFilter !== ""){
          let regFilter = new RegExp(["^", queryFilter,"$"].join(""),"i");
            data = await this.ClothesModel.find({ $or: [{size: {$in : regFilter}}, {color:{$in: regFilter}}, {category: {$in: regFilter}}]})
            .limit(limit)
            .skip(limit * (page - 1))
            .sort({ title: "desc" })
            .exec();
            count = await this.ClothesModel.find({ $or: [{size: {$in : regFilter}}, {color:{$in: regFilter}}, {category: {$in: regFilter}}]}).count()
        }else{
          data = await this.ClothesModel.find()
          .limit(limit)
          .skip(limit * (page - 1))
          .sort({ title: "desc" })
          .exec();
          count = await this.ClothesModel.find().count()
        }
        
    
        return { data: data, total: count };
      }
      //update = id
      async update(updateClothesDto: UpdateClothesDto, _id: ObjectId): Promise<Clothes> {
 

        await this.ClothesModel.findOneAndUpdate(_id, updateClothesDto).exec();
    
        return this.ClothesModel.findById(_id).exec();
      }

      // delete = id
      async delete(_id: ObjectId): Promise<Clothes> {
        return this.ClothesModel.findOneAndDelete(_id).exec();
      }
}
