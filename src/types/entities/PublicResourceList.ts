import type {Resource} from './Resource';
import type {ResourceType} from './ResourceType';

export type PublicResourceList = {
    items: Partial<Resource>[];
    type: ResourceType;
    limit: number;
    offset: number;   
};
