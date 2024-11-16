import type {SchemaEntry} from 'reqsrv';
import type {Disk} from '../entities/Disk';

export type GetDisk = SchemaEntry<{
    request: void | {
        query: void;
    };
    response: {
        body: Disk;
    };
}>;
