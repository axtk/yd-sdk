# yd-sdk

*Typed isomorphic Yandex Disk SDK*

[![npm](https://img.shields.io/npm/v/yd-sdk?labelColor=345&color=46e)](https://www.npmjs.com/package/yd-sdk) ![Lightweight](https://img.shields.io/bundlephobia/minzip/yd-sdk?label=minzip&labelColor=345&color=46e)

Installation: `npm i yd-sdk`

## Initialization

```ts
import { sdk } from "yd-sdk";

let api = sdk();
```

or with an OAuth token required to access non-public resources:

```ts
let api = sdk({
  token: "xxx",
});
```

or with a custom setup:

```ts
let api = sdk({
  token: "xxx",
  endpoint: "/yd-api",
  headers: {
    "x-csrf-token": "xxx",
  },
});
```

## API call examples

```ts
let { status, body: storageInfo } = await api.storage.info();
```

```ts
let { status, body } = await api.info({ path: "/", limit: 10 });
```

All successful API calls resolve with an object containing `status` reflecting the HTTP status code (along with a corresponding `statusText`) and `body` holding the data returned from the API.

## Error handling

Whenever an SDK method encounters an API error, the method throws an instance of `RequestError`.

```ts
import { RequestError } from "yd-sdk";

try {
  let { body: dirInfo } = await api.info({ path: "/x" });

  // use the successfully retrieved resource data
}
catch (error) {
  if (error instanceof RequestError && error.status === 404) {
    // handle the missing resource error
  }
}
```

The API error object is supplied with a `status` value reflecting the HTTP status code and `data` of type `YDError` containing the error description provided by the API.

## List of available methods

```
Method                 Brief description

api.public.info()      Get a public resource metadata
api.public.list()      List public resources
api.public.download()  Get a public resource download link
api.public.save()      Copy a public resource to the Downloads directory

api.storage.info()     Get the storage info

api.info()             Get a resource metadata + nested files for directories
api.list()             Get a flat file list + filter by media type
api.recent()           Get most recently uploaded files
api.create()           Create a directory
api.copy()             Copy a resource
api.move()             Move a resource
api.remove()           Remove a resource
api.publish()          Open public access to a resource
api.unpublish()        Close public access to a resource
api.upload()           Request a file upload link
api.uploadFromURL()    Upload a file from a given link
api.download()         Get a resource download link
api.update()           Update custom properties of a resource
api.operation()        Get the status of an operation

api.trash.clear()      Clear Trash or permanently delete a resource
api.trash.restore()    Restore from Trash
```

The method parameters are the query parameters of the corresponding [API methods](https://yandex.com/dev/disk-api/doc/en/). The only exception is the `api.update()` method requiring `{ query, body }` as the parameter.

## Types

The type namespaces `YDIn`, `YDOut` and `YDResponse` contain the types of the SDK methods. The types within these namespaces are named after the methods:

```ts
import type { YDIn } from "yd-sdk";

let params: YDIn.Public.Info = {
  path: "/",
  limit: 10,
};

let { status, body } = await api.public.info(params);
// `body` is of type `YDOut.Public.Info`
// the entire response is of type `YDResponse.Public.Info`
```

## Utilities

### `isOperationLink()`, `getOperationId()`

Some API methods (and the corresponding SDK methods, like `.copy()` or `.move()`) return either a `Link` object pointing to the processed resource or an `OperationLink` object with a link to an operation in progress. The utility functions `isOperationLink()` and `getOperationId()` help handle API responses of these types.

```ts
import { isOperationLink, getOperationId } from "yd-sdk";

let { body: result } = await api.move({ from: "/x", path: "/y" });

if (isOperationLink(result)) {
  let operationId = getOperationId(result);

  // track the operation status with
  // `await api.operation({ id: operationId })`
}
else {
  // use the processed resource `Link` object
}
```

## See also

&rarr; [*Yandex Disk API Docs*](https://yandex.com/dev/disk-api/doc/en/)
