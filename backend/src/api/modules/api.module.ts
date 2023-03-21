import { Module } from '@nestjs/common';
import { ApiController } from '../controllers/api.controller';
import { ApiService } from '../services/api.service';
import { RedirectController } from '../controllers/redirect.controller';
import { RedirectService } from '../services/redirect.service';

@Module({
  imports: [],
  controllers: [ApiController, RedirectController],
  providers: [ApiService, RedirectService],
})
export class ApiModule {}
