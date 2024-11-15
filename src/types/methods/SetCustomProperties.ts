import type {SchemaEntry} from 'reqsrv';
import type {PathString} from '~/src/types/util/PathString';
import type {FieldList} from '~/src/types/entities/FieldList';
import type {Resource} from '~/src/types/entities/Resource';

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
        body: Partial<Resource>;
    };
}>;
