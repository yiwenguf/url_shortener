import { RedirectService } from '../services/redirect.service';
export declare class RedirectController {
    private readonly redirectService;
    constructor(redirectService: RedirectService);
    redirectLink(link: any, response: any): Promise<void>;
}
