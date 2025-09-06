import type {SchemaEntry} from '@t8/sdk-factory';
import type {Link} from '../entities/Link';
import type {PathString} from '../util/PathString';

export type UnpublishResource = SchemaEntry<{
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
