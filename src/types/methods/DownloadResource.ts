import type {SchemaEntry} from 'reqsrv';
import type {Link} from '~/src/types/entities/Link';
import type {PathString} from '~/src/types/util/PathString';
import type {FieldList} from '~/src/types/entities/FieldList';

export type DownloadResource = SchemaEntry<{
    request: {
        path: PathString;
        fields?: FieldList;
    };
    response: {
        body: Link;
    };
}>;
