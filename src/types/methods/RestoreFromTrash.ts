import type {SchemaEntry} from 'reqsrv';
import type {PathString} from '../util/PathString';
import type {Link} from '../entities/Link';
import type {OperationLink} from '../entities/OperationLink';

export type RestoreFromTrash = SchemaEntry<{
    request: {
        query: {
            path: PathString;
            name?: string;
            /** @default false */
            overwrite?: boolean;
        };
    };
    response:
        | {
            status: 201;
            body: Link;
        }
        | {
            status: 202;
            body: OperationLink;
        };
}>;
