import type {SchemaEntry} from 'reqsrv';
import type {PathString} from '~/src/types/util/PathString';
import type {FieldList} from '~/src/types/entities/FieldList';
import type {Link} from '~/src/types/entities/Link';

export type UploadResource = SchemaEntry<{
    request: {
        query: {
            path: PathString;
            /** @default false */
            overwrite?: boolean;
            fields?: FieldList;
        };
    };
    response: {
        /** Upload target link */
        body: Link;
    };
}>;
