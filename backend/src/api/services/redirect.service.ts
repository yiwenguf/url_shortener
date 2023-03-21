import { Injectable } from '@nestjs/common';
import Links from 'src/db/models/links';
import { find } from '../dal/links';

@Injectable()
export class RedirectService {
  getLink = (newLink: string): Promise<Links> => {
    return find(newLink);
  };
}
