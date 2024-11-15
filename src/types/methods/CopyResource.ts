import type {SchemaEntry} from 'reqsrv';
import type {PathString} from '~/src/types/util/PathString';
import type {FieldList} from '~/src/types/entities/FieldList';
import type {Link} from '~/src/types/entities/Link';
import type {OperationLink} from '~/src/types/entities/OperationLink';

export type CopyResource = SchemaEntry<{
    request: {
        query: {
            from: PathString;
            path: PathString;
            /** @default false */
            overwrite?: boolean;
            fields?: FieldList;
        };
    };
    response:
        // file or empty directory
        | {
            status: 201;
            body: Link;
        }
        // non-empty directory
        | {
            status: 202;
            body: OperationLink;
        };
}>;
