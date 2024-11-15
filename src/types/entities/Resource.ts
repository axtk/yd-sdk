import type {ResourceCore} from './ResourceCore';
import type {ResourceList} from './ResourceList';
import type {ResourceType} from './ResourceType';
import type {User} from './User';

export type Resource<T extends ResourceType = ResourceType> = ResourceCore<T> & {
    _embedded?: ResourceList;
    views_count?: number;
    owner?: Pick<User, 'uid' | 'login' | 'display_name'>;
};
