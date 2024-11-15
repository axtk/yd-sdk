import {
    RequestService,
    RequestError,
    RequestErrorParams,
    getRequestAction,
    toStringValueMap,
} from 'reqsrv';
import {endpoint as defaultEndpoint} from '../const/endpoint';
import type {APISchema} from '../types/APISchema';
import type {ServiceParams} from '../types/ServiceParams';
import type {TransformInput} from '../types/TransformInput';

export function getService(params: ServiceParams = {}) {
    let transformInput: TransformInput;

    if ('transformInput' in params)
        transformInput = params.transformInput;
    else {
        transformInput = ({request, target}) => {
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

    return new RequestService<APISchema>(async (target, request = {}) => {
        let response = await fetch(
            ...transformInput({request, target}),
        );

        let {ok, status, statusText} = response;

        if (!ok) {
            let errorParams: RequestErrorParams = {
                status,
                statusText,
            };

            try {
                errorParams.data = await response.json();
            }
            catch {}

            throw new RequestError(errorParams);
        }

        try {
            return {
                ok,
                status,
                statusText,
                body: await response.json(),
            };
        }
        catch (error) {
            throw new RequestError(error);
        }
    });
}
