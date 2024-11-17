import type {SchemaEntry} from 'reqsrv';
import type {OperationStatus} from '../entities/OperationStatus';

export type GetOperation = SchemaEntry<{
    request: {
        query: {
            id: string;
        };
    };
    response: {
        status: 200;
        body: {
            status: OperationStatus;
        };
    };
}>;
