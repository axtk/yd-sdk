import type {SchemaEntry} from 'reqsrv';
import type {FieldList} from '~/src/types/entities/FieldList';
import type {Resource} from '~/src/types/entities/Resource';
import type {Sort} from '~/src/types/entities/Sort';
import type {PathString} from '~/src/types/util/PathString';

export type GetResource = SchemaEntry<{
    request: {
        query: {
            path: PathString;
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
