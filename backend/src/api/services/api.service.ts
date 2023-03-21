import { Injectable } from '@nestjs/common';
import Links from '../../db/models/links';
import {
  isUrlValid,
  isNewUrlValid,
  generateRandomString,
} from '../../utils/util';
import { create } from '../dal/links';

@Injectable()
export class ApiService {
  createLink = (
    originalLink: string,
    newLink: string,
  ): Promise<[Links, boolean]> => {
    const shouldGenerateLink = !newLink;
    if (!originalLink) return null;
    if (shouldGenerateLink) newLink = generateRandomString(6);
    try {
      if (isUrlValid(originalLink) && isNewUrlValid(newLink)) {
        return create(originalLink, newLink);
      }
      return null;
    } catch (err) {
      throw err;
    }
  };
}
