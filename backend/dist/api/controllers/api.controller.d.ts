import { Response } from 'express';
import { ApiService } from '../services/api.service';
export declare class ApiController {
    private readonly appService;
    constructor(appService: ApiService);
    postLink(response: Response, body: {
        originalLink: string;
        newLink: string;
    }): Promise<void>;
}
