import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api/modules/api.module';
import initDb from './db/init';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);
  app.enableCors();
  await initDb();
  await app.listen(process.env.port);
}
bootstrap();
