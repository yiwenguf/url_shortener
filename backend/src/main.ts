import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api/modules/api.module';
import dbInit from './db/init';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);
  await dbInit();
  app.enableCors();
  await app.listen(3001);
}
bootstrap();
