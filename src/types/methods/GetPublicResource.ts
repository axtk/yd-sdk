import type {SchemaEntry} from 'reqsrv';
import type {FieldList} from '../entities/FieldList';
import type {Resource} from '../entities/Resource';
import type {Sort} from '../entities/Sort';
import type {PathString} from '../util/PathString';

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
