import type {SchemaEntry} from 'reqsrv';
import type {PathString} from '../util/PathString';
import type {OperationLink} from '../entities/OperationLink';

export type ClearTrash = SchemaEntry<{
    request: void | {
        query: void | {
            /** If path is not provided, everything in the trash is removed. */
            path?: PathString;
        };
    };
    response:
        | {
            status: 204;
        }
        | {
            status: 202;
            body: OperationLink;
        };
}>;
