import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Transform } from "class-transformer";
import { HydratedDocument } from "mongoose";
import { ObjectId } from "mongoose";

export type RequireClothesDocument = HydratedDocument<RequireClothes>;

@Schema()
export class RequireClothes {
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @Prop()
  firstname: string;

  @Prop()
  lastname: string;

  @Prop()
  statictreet: string;



  @Prop()
  phone: string;

  @Prop()
  email: string;

  @Prop()
  status: string;

  @Prop()
  additional: string;

  @Prop()
  title: string;

  // @Prop()
  // quantity: string;

  // @Prop()
  // new: string;

  // @Prop()
  // best: string;

  // @Prop()
  // price: string;

  // @Prop()
  // discount: string;

  // @Prop([String])
  // category: string[];

  // @Prop([String])
  // images: string[];

  // @Prop()
  // description: string;

  // @Prop([String])
  // color: string[];

  // @Prop([String])
  // size: string[];
}

export const RequireClothesSchema = SchemaFactory.createForClass(RequireClothes);

// export const NewSchema = new mongoose.Schema({
//   //_id: mongoose.Schema.Types.ObjectId,

//   title: String,

//   workList: String,

//   detailWork: String,

//   note: String,

//   postDate: String,

//   poster: String,

//   images: Array<string>,

//   users: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
// });
