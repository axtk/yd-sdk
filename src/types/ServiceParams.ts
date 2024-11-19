import type {TransformInput} from 'reqsrv';

export type ServiceParams = {
    token?: string;
    endpoint?: string;
    headers?: Record<string, unknown>;
} | {
    transformInput: TransformInput;
};
