import { NestFactory } from '@nestjs/core';
import { AppModule } from './infrastructure/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const config = new DocumentBuilder()
  //   .setTitle('Video Gallery Sharing')
  //   .setDescription('The API for Video Gallery Sharing app!')
  //   .setVersion('0.0.1')
  //   .addTag('Video Sharing')
  //   .build();
  //
  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);
}

bootstrap();
