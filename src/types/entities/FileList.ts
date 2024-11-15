import type {ResourceCore} from './ResourceCore';

export type FileList = {
    items: Partial<ResourceCore>[];
    limit: number;
    offset: number;
};
