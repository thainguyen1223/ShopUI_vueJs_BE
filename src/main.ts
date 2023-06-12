/* eslint-disable prettier/prettier */
import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";
import { urlencoded, json } from 'express';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: false,
    }),
  );
  const config = new DocumentBuilder()
    .setTitle("SHOP-UI")
    .setDescription("SHOP-UI")
    .setVersion("1.0")
    .addTag("SHOP-UI")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
