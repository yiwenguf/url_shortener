import Links from '../../db/models/links';
export declare class ApiService {
    createLink: (originalLink: string, newLink: string) => Promise<[Links, boolean]>;
}
