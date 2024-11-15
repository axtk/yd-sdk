import type {SchemaEntry} from 'reqsrv';
import type {Link} from '../entities/Link';
import type {PathString} from '../util/PathString';

export type PublishResource = SchemaEntry<{
    request: {
        path: PathString;
    };
    response: {
        body: Link;
    };
}>;
