import type {OperationLink} from '../types/entities/OperationLink';

export function getOperationId({href}: OperationLink) {
    try {
        return new URL(href).searchParams.get('id');
    }
    catch {}
}
