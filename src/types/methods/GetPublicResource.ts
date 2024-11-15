import type {SchemaEntry} from 'reqsrv';
import type {Resource} from '~/src/types/entities/Resource';
import type {Sort} from '~/src/types/entities/Sort';
import type {PathString} from '~/src/types/util/PathString';
import type {FieldList} from '~/src/types/entities/FieldList';

export type GetPublicResource = SchemaEntry<{
    request: {
        query: {
            public_key: string;
            path?: PathString;
            fields?: FieldList;
            sort?: Sort;
            /** @default 20 */
            limit?: number;
            offset?: number;
            preview_size?: string;
            preview_crop?: boolean;
        };
    };
    response: {
        body: Partial<Resource>;
    };
}>;
