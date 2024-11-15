import type {RequestSchema, APITarget} from 'reqsrv';

type RequestInitPolyfill = NonNullable<Parameters<typeof fetch>[1]>;

export type TransformInputParams = {
    target: APITarget;
    request: RequestSchema;
};

export type TransformInput = (params: TransformInputParams) =>
    [string | URL, RequestInitPolyfill];
