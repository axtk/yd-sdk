import type {SchemaEntry} from 'reqsrv';
import type {PathString} from '../util/PathString';
import type {FieldList} from '../entities/FieldList';
import type {Link} from '../entities/Link';

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
