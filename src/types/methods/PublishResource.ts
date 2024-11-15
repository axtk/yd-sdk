import type {SchemaEntry} from 'reqsrv';
import type {Link} from '~/src/types/entities/Link';
import type {PathString} from '~/src/types/util/PathString';

export type PublishResource = SchemaEntry<{
    request: {
        path: PathString;
    };
    response: {
        body: Link;
    };
}>;
