import type {SchemaEntry} from '@t8/sdk-factory';
import type {PathString} from '../util/PathString';
import type {FieldList} from '../entities/FieldList';
import type {Resource} from '../entities/Resource';

export type SetCustomProperties = SchemaEntry<{
    request: {
        query: {
            path: PathString;
            fields?: FieldList;
        },
        body: {
            custom_properties: Record<string, string | null>;
        };
    };
    response: {
        status: 200;
        body: Partial<Resource>;
    };
}>;
