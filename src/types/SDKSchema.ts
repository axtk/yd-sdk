import type { ReqQuery, ReqShape, ResBody, ResShape } from "@t8/sdk-factory";
import type { Error as ErrorShape } from "./entities/Error";
import type { ClearTrash } from "./methods/ClearTrash";
import type { CopyResource } from "./methods/CopyResource";
import type { CreateResource } from "./methods/CreateResource";
import type { DownloadPublicResource } from "./methods/DownloadPublicResource";
import type { DownloadResource } from "./methods/DownloadResource";
import type { GetDisk } from "./methods/GetDisk";
import type { GetFlatFileList } from "./methods/GetFlatFileList";
import type { GetLastUploaded } from "./methods/GetLastUploaded";
import type { GetOperation } from "./methods/GetOperation";
import type { GetPublicResource } from "./methods/GetPublicResource";
import type { GetPublicResources } from "./methods/GetPublicResources";
import type { GetResource } from "./methods/GetResource";
import type { MoveResource } from "./methods/MoveResource";
import type { PublishResource } from "./methods/PublishResource";
import type { RemoveResource } from "./methods/RemoveResource";
import type { RestoreFromTrash } from "./methods/RestoreFromTrash";
import type { SaveToDisk } from "./methods/SaveToDisk";
import type { SetCustomProperties } from "./methods/SetCustomProperties";
import type { UnpublishResource } from "./methods/UnpublishResource";
import type { UploadRemoteResource } from "./methods/UploadRemoteResource";
import type { UploadResource } from "./methods/UploadResource";

export namespace YDIn {
  export namespace Public {
    export type Info = ReqQuery<GetPublicResource>;
    export type List = ReqQuery<GetPublicResources>;
    export type Download = ReqQuery<DownloadPublicResource>;
    export type Save = ReqQuery<SaveToDisk>;
  }

  export namespace Storage {
    export type Info = ReqQuery<GetDisk>;
  }

  export type Info = ReqQuery<GetResource>;
  export type List = ReqQuery<GetFlatFileList>;
  export type Recent = ReqQuery<GetLastUploaded>;
  export type Create = ReqQuery<CreateResource>;
  export type Copy = ReqQuery<CopyResource>;
  export type Move = ReqQuery<MoveResource>;
  export type Remove = ReqQuery<RemoveResource>;
  export type Publish = ReqQuery<PublishResource>;
  export type Unpublish = ReqQuery<UnpublishResource>;
  export type Upload = ReqQuery<UploadResource>;
  export type UploadFromURL = ReqQuery<UploadRemoteResource>;
  export type Download = ReqQuery<DownloadResource>;
  export type Operation = ReqQuery<GetOperation>;
  export type Update = ReqShape<SetCustomProperties>;

  export namespace Trash {
    export type Clear = ReqQuery<ClearTrash>;
    export type Restore = ReqQuery<RestoreFromTrash>;
  }
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

  export namespace Trash {
    export type Clear = ResBody<ClearTrash>;
    export type Restore = ResBody<RestoreFromTrash>;
  }
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

  export namespace Trash {
    export type Clear = ResShape<ClearTrash>;
    export type Restore = ResShape<RestoreFromTrash>;
  }
}

export type YDError = ErrorShape;
