import type {SchemaEntry} from 'reqsrv';
import type {ResourceType} from '~/src/types/entities/ResourceType';
import type {PublicResourceList} from '~/src/types/entities/PublicResourceList';
import type {FieldList} from '~/src/types/entities/FieldList';

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
        body: PublicResourceList;
    };
}>;
