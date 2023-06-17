/* eslint-disable prettier/prettier */
import * as mongoose from "mongoose";
//import { Schema } from "mongoose";

import { HydratedDocument } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { User } from "src/users/schemas/users.schema";
import { Transform, Type } from "class-transformer";

export type FeedBacksDocument = HydratedDocument<FeedBack>;

@Schema()
export class FeedBack {
  @Transform(({ value }) => value.toString())
  _id: mongoose.ObjectId;

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  subject: string;

  @Prop()
  message: string;


 
}

export const FeedBacksSchema = SchemaFactory.createForClass(FeedBack);

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
