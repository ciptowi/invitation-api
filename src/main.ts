import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from './http/exception.filter';
import { ValidationPipe } from './validation/validation.pipe';
import { TransformInterceptor } from './transform/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Generate Swagger Documentation API
  const config = new DocumentBuilder()
    .setTitle('Invitation API')
    .setDescription('The Invitation API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: { defaultModelsExpandDepth: -1 },
  });

  // Init Response Object
  app.useGlobalInterceptors(new TransformInterceptor());

  // Init Response Error
  app.useGlobalFilters(new HttpExceptionFilter());

  // Init Validation
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
