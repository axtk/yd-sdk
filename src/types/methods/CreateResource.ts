import type {SchemaEntry} from 'reqsrv';
import type {PathString} from '~/src/types/util/PathString';
import type {FieldList} from '~/src/types/entities/FieldList';
import type {Link} from '~/src/types/entities/Link';

export type CreateResource = SchemaEntry<{
    request: {
        query: {
            path: PathString;
            fields?: FieldList;
        };
    };
    response: {
        body: {
            status: 201;
            body: Link;
        };
    };
}>;
