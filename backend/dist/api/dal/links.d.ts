import Links from '../../db/models/links';
export declare const create: (originalLink: string, newLink: string) => Promise<[Links, boolean]>;
export declare const find: (newLink: string) => Promise<Links>;
