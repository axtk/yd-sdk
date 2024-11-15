import type {User} from '~/src/types/entities/User';
import type {DiskPathString} from '~/src/types/util/DiskPathString';
import type {ISODateString} from '~/src/types/util/ISODateString';

export type Disk = {
    /** In bytes */
    total_space: number;
    /** In bytes */
    used_space: number;
    /** In bytes */
    trash_size: number;
    system_folders: {
        applications?: DiskPathString;
        downloads?: DiskPathString;
    };
    is_paid?: boolean;
    reg_time?: ISODateString;
    user?: User;
    revision?: number;
};
