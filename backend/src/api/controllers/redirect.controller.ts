import { Controller, Get, Param, Res } from '@nestjs/common';
import { RedirectService } from '../services/redirect.service';

@Controller('')
export class RedirectController {
  constructor(private readonly redirectService: RedirectService) {}

  @Get(':link')
  async redirectLink(@Param('link') link, @Res() response) {
    const newLink = await this.redirectService.getLink(link);

    if (newLink) {
      response.redirect(newLink.originalLink);
    } else {
      response.status(404).send({ message: 'This link does not exist' });
    }
  }
}
