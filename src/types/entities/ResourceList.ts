import type {ResourceItem} from './ResourceItem';
import type {Sort} from './Sort';

export type ResourceList = {
    sort: Sort;
    public_key: string;
    items: Partial<ResourceItem>[];
    path: string;
    limit: number;
    offset: number;
    total: number;
};
