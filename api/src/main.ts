import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import * as express from 'express';
import helmet from 'helmet';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  app.use(helmet());
  app.use(
    '/uploads',
    express.static(join(__dirname, '..', 'uploads'), {
      setHeaders: (
        res: express.Response<any, Record<string, any>>,
        path: string,
      ) => {
        res.set('Cross-Origin-Resource-Policy', 'cross-origin');
      },
    }),
  );
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Shopify API')
    .setDescription('RESTful API for shopify client')
    .setVersion('1.0')
    .addTag('shopify')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.SERVER_PORT);
}

bootstrap();
