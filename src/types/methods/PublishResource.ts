import type {SchemaEntry} from 'reqsrv';
import type {Link} from '../entities/Link';
import type {PathString} from '../util/PathString';

export type PublishResource = SchemaEntry<{
    request: {
        query: {
            path: PathString;
        };
    };
    response: {
        status: 200;
        body: Link;
    };
}>;
