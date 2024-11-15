import type {SchemaEntry} from 'reqsrv';
import type {Disk} from '../entities/Disk';

export type GetDisk = SchemaEntry<{
    request: void;
    response: {
        body: Disk;
    };
}>;
