import type {SchemaEntry} from '@t8/sdk-factory';
import type {MediaType} from '../entities/MediaType';
import type {FieldList} from '../entities/FieldList';
import type {FileList} from '../entities/FileList';

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
        status: 200;
        body: FileList;
    };
}>;
