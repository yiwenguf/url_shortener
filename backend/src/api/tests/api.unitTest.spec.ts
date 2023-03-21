import { Test, TestingModule } from '@nestjs/testing';
import { ApiController } from '../controllers/api.controller';
import { ApiService } from '../services/api.service';
import Links from '../../db/models/links';
// import { create } from '../dal/links';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const linksDal = require('../dal/links');

describe('AppService', () => {
  let apiController: ApiController;
  let apiService: ApiService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ApiController],
      providers: [ApiService],
    }).compile();

    apiController = app.get<ApiController>(ApiController);
    apiService = app.get<ApiService>(ApiService);
  });

  describe('api service', () => {
    const promise = new Promise<[Links, boolean]>((resolve, reject) => {
      resolve([new Links(), true]);
    });
    it('test with correct inputs"', () => {
      jest.spyOn(linksDal, 'create').mockImplementation(() => promise);
      expect(apiService.createLink('https://www.google.com', 'googs')).toBe(
        promise,
      );
    });
    it('test with original link without https://"', () => {
      jest.spyOn(linksDal, 'create').mockImplementation(() => promise);
      expect(apiService.createLink('www.google.com', 'googs')).toBe(null);
    });
    it('test with original link without www"', () => {
      jest.spyOn(linksDal, 'create').mockImplementation(() => promise);
      expect(apiService.createLink('https://google.com', 'googs')).toBe(
        promise,
      );
    });
    it('test with original link without .com"', () => {
      jest.spyOn(linksDal, 'create').mockImplementation(() => promise);
      expect(apiService.createLink('https://www.google', 'googs')).toBe(
        promise,
      );
    });
    it('test with original link without www & .com"', () => {
      jest.spyOn(linksDal, 'create').mockImplementation(() => promise);
      expect(apiService.createLink('https://google', 'googs')).toBe(null);
    });
    it('test with original link being null"', () => {
      jest.spyOn(linksDal, 'create').mockImplementation(() => promise);
      expect(apiService.createLink(null, 'googs')).toBe(null);
    });
    it('test with new link being null"', () => {
      jest.spyOn(linksDal, 'create').mockImplementation(() => promise);
      expect(apiService.createLink('https://www.google.com', null)).toBe(
        promise,
      );
    });
    it('test with both original and new link being null"', () => {
      jest.spyOn(linksDal, 'create').mockImplementation(() => promise);
      expect(apiService.createLink(null, null)).toBe(null);
    });
    it('test with new link containing alphabets, numbers, - and _"', () => {
      jest.spyOn(linksDal, 'create').mockImplementation(() => promise);
      expect(apiService.createLink('https://www.google.com', 'go-99_gle')).toBe(
        promise,
      );
    });
    it('test with new link containing /"', () => {
      jest.spyOn(linksDal, 'create').mockImplementation(() => promise);
      expect(apiService.createLink('https://www.google.com', 'goo/gle')).toBe(
        null,
      );
    });
  });
});
