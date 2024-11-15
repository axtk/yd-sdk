import type {SchemaEntry} from 'reqsrv';
import type {PathString} from '~/src/types/util/PathString';
import type {Link} from '~/src/types/entities/Link';
import type {OperationLink} from '~/src/types/entities/OperationLink';

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