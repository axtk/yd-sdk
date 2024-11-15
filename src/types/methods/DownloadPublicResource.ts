import type {SchemaEntry} from 'reqsrv';
import type {Link} from '../entities/Link';
import type {PathString} from '../util/PathString';

export type DownloadPublicResource = SchemaEntry<{
    request: {
        public_key: string;
        path?: PathString;
    };
    response: {
        body: Link;
    };
}>;
