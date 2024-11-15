import type {SchemaEntry} from 'reqsrv';
import type {MediaType} from '~/src/types/entities/MediaType';
import type {FieldList} from '~/src/types/entities/FieldList';
import type {FileList} from '~/src/types/entities/FileList';

export type GetFlatFileList = SchemaEntry<{
    request: void | {
        query: void | {
            fields?: FieldList;
            /** @default 20 */
            limit?: number;
            offset?: number;
            media_type?: MediaType;
            preview_size?: string;
            preview_crop?: boolean;
        };
    };
    response: {
        body: FileList;
    };
}>;
