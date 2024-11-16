import type {SchemaEntry} from 'reqsrv';
import type {Link} from '../entities/Link';
import type {OperationLink} from '../entities/OperationLink';
import type {PathString} from '../util/PathString';

export type SaveToDisk = SchemaEntry<{
    request: {
        query: {
            public_key: string;
            path?: PathString;
            name?: string;
        };
    };
    response:
        | {
            status: 200;
            body: Link;
        }
        | {
            status: 202;
            body: OperationLink;
        };
}>;
