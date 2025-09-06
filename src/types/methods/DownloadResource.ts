import type {SchemaEntry} from '@t8/sdk-factory';
import type {Link} from '../entities/Link';
import type {PathString} from '../util/PathString';
import type {FieldList} from '../entities/FieldList';

export type DownloadResource = SchemaEntry<{
    request: {
        query: {
            path: PathString;
            fields?: FieldList;
        };
    };
    response: {
        status: 200;
        body: Link;
    };
}>;
