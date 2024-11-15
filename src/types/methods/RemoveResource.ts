import type {SchemaEntry} from 'reqsrv';
import type {PathString} from '~/src/types/util/PathString';
import type {FieldList} from '~/src/types/entities/FieldList';
import type {OperationLink} from '~/src/types/entities/OperationLink';

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
            body: never;
        }
        // non-empty directory
        | {
            status: 202;
            body: OperationLink;
        };
}>;
