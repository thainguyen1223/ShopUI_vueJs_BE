/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./users/users.module";

import { AuthModule } from "./auth/auth.module";
import { ProfileModule } from "./profile/profile.module";
import { FeedBacksModule } from "./feedback/feedbacks.module";
import { ClothesModule } from './clothes/clothes.module';

import { RequireClothesModule } from './require-clothes/require-clothes.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://duythai147258:banlaai123@cluster0.tyvlh7k.mongodb.net/shop-ui"),
    UserModule,
    AuthModule,
    ProfileModule,
    FeedBacksModule,
    ClothesModule,
    RequireClothesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
