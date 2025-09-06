import type {SchemaEntry} from '@t8/sdk-factory';
import type {PathString} from '../util/PathString';
import type {FieldList} from '../entities/FieldList';
import type {Link} from '../entities/Link';
import type {OperationLink} from '../entities/OperationLink';

export type MoveResource = SchemaEntry<{
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
