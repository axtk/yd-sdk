import type {ResourceCore} from './ResourceCore';
import type {Sort} from './Sort';

export type ResourceList = {
    sort: Sort;
    public_key: string;
    items: Partial<ResourceCore>[];
    path: string;
    limit: number;
    offset: number;
    total: number;
};
