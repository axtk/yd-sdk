import type {SchemaEntry} from '@t8/sdk-factory';
import type {PathString} from '../util/PathString';
import type {FieldList} from '../entities/FieldList';
import type {OperationLink} from '../entities/OperationLink';

export type RemoveResource = SchemaEntry<{
    request: {
        query: {
            path: PathString;
            /** @default false */
            permanently?: boolean;
            fields?: FieldList;
        };
    };
    response:
        // file or empty directory
        | {
            status: 204;
            body: undefined;
        }
        // non-empty directory
        | {
            status: 202;
            body: OperationLink;
        };
}>;
