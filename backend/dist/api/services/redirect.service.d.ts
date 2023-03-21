import Links from 'src/db/models/links';
export declare class RedirectService {
    getLink: (newLink: string) => Promise<Links>;
}
