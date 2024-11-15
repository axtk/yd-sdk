import type {SchemaEntry} from 'reqsrv';
import type {Disk} from '~/src/types/entities/Disk';

export type GetDisk = SchemaEntry<{
    request: void;
    response: {
        body: Disk;
    };
}>;
