import type {SchemaEntry} from 'reqsrv';
import type {ResourceType} from '../entities/ResourceType';
import type {PublicResourceList} from '../entities/PublicResourceList';
import type {FieldList} from '../entities/FieldList';

export type GetPublicResources = SchemaEntry<{
    request: void | {
        query: void | {
            limit?: number;
            offset?: number;
            type?: ResourceType;
            fields?: FieldList;
            preview_size?: string;
            preview_crop?: boolean;
        };
    };
    response: {
        status: 200;
        body: PublicResourceList;
    };
}>;
