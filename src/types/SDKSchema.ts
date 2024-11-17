import type {PartialRequest, PartialResponse, ResponseShape, SchemaEntry} from 'reqsrv';
import type {Error as ErrorShape} from './entities/Error';
import type {GetDisk} from './methods/GetDisk';
import type {GetFlatFileList} from './methods/GetFlatFileList';
import type {GetLastUploaded} from './methods/GetLastUploaded';
import type {GetResource} from './methods/GetResource';
import type {GetPublicResources} from './methods/GetPublicResources';
import type {GetPublicResource} from './methods/GetPublicResource';
import type {DownloadPublicResource} from './methods/DownloadPublicResource';
import type {SaveToDisk} from './methods/SaveToDisk';
import type {PublishResource} from './methods/PublishResource';
import type {UnpublishResource} from './methods/UnpublishResource';
import type {CopyResource} from './methods/CopyResource';
import type {MoveResource} from './methods/MoveResource';
import type {RemoveResource} from './methods/RemoveResource';
import type {CreateResource} from './methods/CreateResource';
import type {UploadResource} from './methods/UploadResource';
import type {UploadRemoteResource} from './methods/UploadRemoteResource';
import type {DownloadResource} from './methods/DownloadResource';
import type {SetCustomProperties} from './methods/SetCustomProperties';
import type {GetOperation} from './methods/GetOperation';
import type {ClearTrash} from './methods/ClearTrash';
import type {RestoreFromTrash} from './methods/RestoreFromTrash';

type Query<T extends SchemaEntry> = PartialRequest<T, 'query'>;
type ResBody<T extends SchemaEntry> = PartialResponse<T, 'body'>;
type ResShape<T extends SchemaEntry> = ResponseShape<T['response']>;

export namespace YDIn {
    export namespace Public {
        export type Info = Query<GetPublicResource>;
        export type List = Query<GetPublicResources>;
        export type Download = Query<DownloadPublicResource>;
        export type Save = Query<SaveToDisk>;
    }

    export namespace Storage {
        export type Info = Query<GetDisk>;
    }

    export namespace Trash {
        export type Clear = Query<ClearTrash>;
        export type Restore = Query<RestoreFromTrash>;
    }

    export type Info = Query<GetResource>;
    export type List = Query<GetFlatFileList>;
    export type Recent = Query<GetLastUploaded>;
    export type Create = Query<CreateResource>;
    export type Copy = Query<CopyResource>;
    export type Move = Query<MoveResource>;
    export type Remove = Query<RemoveResource>;
    export type Publish = Query<PublishResource>;
    export type Unpublish = Query<UnpublishResource>;
    export type Upload = Query<UploadResource>;
    export type UploadFromURL = Query<UploadRemoteResource>;
    export type Download = Query<DownloadResource>;
    export type Operation = Query<GetOperation>;
    export type Update = SetCustomProperties['request'];
}

export namespace YDOut {
    export namespace Public {
        export type Info = ResBody<GetPublicResource>;
        export type List = ResBody<GetPublicResources>;
        export type Download = ResBody<DownloadPublicResource>;
        export type Save = ResBody<SaveToDisk>;
    }

    export namespace Storage {
        export type Info = ResBody<GetDisk>;
    }

    export namespace Trash {
        export type Clear = ResBody<ClearTrash>;
        export type Restore = ResBody<RestoreFromTrash>;
    }

    export type Info = ResBody<GetResource>;
    export type List = ResBody<GetFlatFileList>;
    export type Recent = ResBody<GetLastUploaded>;
    export type Create = ResBody<CreateResource>;
    export type Copy = ResBody<CopyResource>;
    export type Move = ResBody<MoveResource>;
    export type Remove = ResBody<RemoveResource>;
    export type Publish = ResBody<PublishResource>;
    export type Unpublish = ResBody<UnpublishResource>;
    export type Upload = ResBody<UploadResource>;
    export type UploadFromURL = ResBody<UploadRemoteResource>;
    export type Download = ResBody<DownloadResource>;
    export type Operation = ResBody<GetOperation>;
    export type Update = ResBody<SetCustomProperties>;
}

export namespace YDResponse {
    export namespace Public {
        export type Info = ResShape<GetPublicResource>;
        export type List = ResShape<GetPublicResources>;
        export type Download = ResShape<DownloadPublicResource>;
        export type Save = ResShape<SaveToDisk>;
    }

    export namespace Storage {
        export type Info = ResShape<GetDisk>;
    }

    export namespace Trash {
        export type Clear = ResShape<ClearTrash>;
        export type Restore = ResShape<RestoreFromTrash>;
    }

    export type Info = ResShape<GetResource>;
    export type List = ResShape<GetFlatFileList>;
    export type Recent = ResShape<GetLastUploaded>;
    export type Create = ResShape<CreateResource>;
    export type Copy = ResShape<CopyResource>;
    export type Move = ResShape<MoveResource>;
    export type Remove = ResShape<RemoveResource>;
    export type Publish = ResShape<PublishResource>;
    export type Unpublish = ResShape<UnpublishResource>;
    export type Upload = ResShape<UploadResource>;
    export type UploadFromURL = ResShape<UploadRemoteResource>;
    export type Download = ResShape<DownloadResource>;
    export type Operation = ResShape<GetOperation>;
    export type Update = ResShape<SetCustomProperties>;
}

export type YDError = ErrorShape;
