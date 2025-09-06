import type {SchemaEntry} from '@t8/sdk-factory';
import type {PathString} from '../util/PathString';
import type {FieldList} from '../entities/FieldList';
import type {URLString} from '../util/URLString';
import type {OperationLink} from '../entities/OperationLink';

export type UploadRemoteResource = SchemaEntry<{
    request: {
        query: {
            url: URLString;
            path: PathString;
            /** @default false */
            disable_redirects?: boolean;
            fields?: FieldList;
        };
    };
    response: {
        status: 202;
        body: OperationLink;
    };
}>;
