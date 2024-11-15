import type {SchemaEntry} from 'reqsrv';
import type {OperationStatus} from '../entities/OperationStatus';

export type GetOperation = SchemaEntry<{
    request: {
        query: {
            id: string;
        };
    };
    response: {
        body: {
            status: OperationStatus;
        };
    };
}>;
