import type {SchemaEntry} from 'reqsrv';
import type {Link} from '../entities/Link';
import type {PathString} from '../util/PathString';

export type UnpublishResource = SchemaEntry<{
    request: {
        path: PathString;
    };
    response: {
        body: Link;
    };
}>;
