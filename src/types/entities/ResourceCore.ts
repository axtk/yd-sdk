import type {ISODateString} from '../util/ISODateString';
import type {URLString} from '../util/URLString';
import type {ResourceType} from './ResourceType';

export type ResourceCore<T extends ResourceType = ResourceType> = {
    public_key?: string;
    public_url?: URLString;
    resource_id: string;
    name: string;
    path: string;
    origin_path: string;
    created: ISODateString;
    modified: ISODateString;
    md5: string;
    type: T;
    mime_type: string;
    size: number;
    preview?: URLString;
    file?: URLString;
    exif?: {
        date_time: ISODateString;
    };
    custom_properties: Record<string, string>;
    revision?: number;
};
