import type {SchemaEntry} from 'reqsrv';
import type {PathString} from '~/src/types/util/PathString';
import type {FieldList} from '~/src/types/entities/FieldList';
import type {URLString} from '~/src/types/util/URLString';
import type {OperationLink} from '~/src/types/entities/OperationLink';

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
        status: 202,
        body: OperationLink;
    };
}>;
