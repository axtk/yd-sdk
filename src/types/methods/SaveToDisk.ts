import type {SchemaEntry} from 'reqsrv';
import type {Link} from '~/src/types/entities/Link';
import type {OperationLink} from '~/src/types/entities/OperationLink';
import type {PathString} from '~/src/types/util/PathString';

export type SaveToDisk = SchemaEntry<{
    request: {
        public_key: string;
        path?: PathString;
        name?: string;
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
