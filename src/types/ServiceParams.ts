import type {TransformInput} from './TransformInput';

export type ServiceParams = {
    token?: string;
    endpoint?: string;
    headers?: Record<string, unknown>;
} | {
    transformInput: TransformInput;
};
