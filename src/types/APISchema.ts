import type {Schema} from 'reqsrv';
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

export type APISchema = Schema<{
    'GET /disk': GetDisk,
    'GET /disk/resources/files': GetFlatFileList,
    'GET /disk/resources/last-uploaded': GetLastUploaded,
    'GET /disk/resources': GetResource,
    'GET /disk/resources/public': GetPublicResources;
    'GET /disk/public/resources': GetPublicResource;
    'GET /disk/public/resources/download': DownloadPublicResource;
    'POST /disk/public/resources/save-to-disk': SaveToDisk;
    'PUT /disk/resources/publish': PublishResource;
    'PUT /disk/resources/unpublish': UnpublishResource;
    'POST /disk/resources/copy': CopyResource;
    'POST /disk/resources/move': MoveResource;
    'DELETE /disk/resources': RemoveResource;
    'PUT /disk/resources': CreateResource,
    'GET /disk/resources/upload': UploadResource,
    'POST /disk/resources/upload': UploadRemoteResource,
    'GET /disk/resources/download': DownloadResource,
    'PATCH /disk/resources': SetCustomProperties,
    'GET /disk/operations': GetOperation,
    'DELETE /disk/trash/resources': ClearTrash,
    'PUT /disk/trash/resources/restore': RestoreFromTrash,
}>;
