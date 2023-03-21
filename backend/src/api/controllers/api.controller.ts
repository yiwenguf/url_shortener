import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { ApiService } from '../services/api.service';

@Controller('api')
export class ApiController {
  constructor(private readonly appService: ApiService) {}

  @Post('create')
  async postLink(
    @Res() response: Response,
    @Body() body: { originalLink: string; newLink: string },
  ) {
    try {
      const result = await this.appService.createLink(
        body.originalLink,
        body.newLink,
      );

      if (result) {
        result[1]
          ? response.status(201).send({
              message: 'URL successfully created',
              newUrl: result[0].newLink,
            })
          : response.status(409).send({ message: 'This URL is already taken' });
      } else {
        response.status(500).send({ message: 'Invalid URL' });
      }
    } catch (err) {
      console.log(err);
      response.status(500).send({ message: 'Something went wrong' });
    }
  }
}
