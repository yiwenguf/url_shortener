import { Module } from '@nestjs/common';
import { ApiController } from '../controllers/api.controller';
import { ApiService } from '../services/api.service';
import { RedirectController } from '../controllers/redirect.controller';
import { RedirectService } from '../services/redirect.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: 'config.env',
  })],
  controllers: [ApiController, RedirectController],
  providers: [ApiService, RedirectService],
})
export class ApiModule {}
