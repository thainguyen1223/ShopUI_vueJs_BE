/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Transform } from "class-transformer";
import { HydratedDocument } from "mongoose";
import { ObjectId } from "mongoose";

export type ClothesDocument = HydratedDocument<Clothes>;

@Schema({ timestamps: true })
export class Clothes {
  @Transform(({ value }) => value.toString())
  _id: ObjectId;


  @Prop()
  title: string ;

  @Prop()
  quantity: string ;

  @Prop()
  new: string ;


  @Prop()
  best: string ;

  @Prop()
  price: string ;

  @Prop()
  discount: string ;

  @Prop([String])
  category: string[] ;

  @Prop([String])
  images: string[] ;

  @Prop()
  description: string ;

  @Prop([String])
  color: string[] ;

  @Prop([String])
  size: string[] ;


}

export const ClothesSchema = SchemaFactory.createForClass(Clothes);

// export const UserSchema = new mongoose.Schema({
//   // _id: Schema.Types.ObjectId,

//   userName: String,

//   identifyCard: String,

//   birthDate: String,

//   phoneNumber: String,

//   email: String,

//   accountName: String,

//   password: String,

//   workDate: String,

//   position: String,

//   salary: String,

//   status: String,

//   lastSignupDate: String,

//   avatarUrl: String,

//   //news: [{ type: Schema.Types.ObjectId, ref: "New" }],

//   //recruits: [{ type: Schema.Types.ObjectId, ref: "Recruit" }],
// });
