import type {SchemaEntry} from 'reqsrv';
import type {Link} from '~/src/types/entities/Link';
import type {PathString} from '~/src/types/util/PathString';

export type DownloadPublicResource = SchemaEntry<{
    request: {
        public_key: string;
        path?: PathString;
    };
    response: {
        body: Link;
    };
}>;
