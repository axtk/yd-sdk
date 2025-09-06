import {
    RequestService,
    RequestErrorParams,
    TransformInput,
    getRequestAction,
    toStringValueMap,
} from '@t8/sdk-factory';
import {endpoint as defaultEndpoint} from '../const/endpoint';
import type {Error as ErrorShape} from '../types/entities/Error';
import type {APISchema} from '../types/APISchema';
import type {ServiceParams} from '../types/ServiceParams';
import {RequestError} from './RequestError';

export function getService(params: ServiceParams = {}) {
    let transformInput: TransformInput;

    if ('transformInput' in params)
        transformInput = params.transformInput;
    else {
        transformInput = ({target, request}) => {
            let {method, url} = getRequestAction({
                request,
                target,
                endpoint: params.endpoint ?? defaultEndpoint,
            });
            
            return [url, {
                method,
                headers: toStringValueMap({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': params.token ? `OAuth ${params.token}` : undefined,
                    ...request?.headers,
                    ...params.headers,
                }),
                body: request?.body ? JSON.stringify(request?.body) : undefined,
            }];
        };
    }

    return new RequestService<APISchema>(async (target, request) => {
        let response = await fetch(
            ...transformInput({target, request}),
        );

        let {ok, status, statusText} = response;

        if (!ok) {
            let errorParams: RequestErrorParams<ErrorShape> = {
                status,
                statusText,
            };

            try {
                errorParams.data = await response.json();
            }
            catch {}

            throw new RequestError(errorParams);
        }

        return {
            ok,
            status,
            statusText,
            body: await response.json(),
        };
    });
}
