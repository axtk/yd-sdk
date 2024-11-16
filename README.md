[![npm](https://img.shields.io/npm/v/yd-sdk?labelColor=royalblue&color=royalblue&style=flat-square)](https://www.npmjs.com/package/yd-sdk) ![node](https://img.shields.io/badge/node-✓-345?labelColor=345&color=345&style=flat-square) ![browser](https://img.shields.io/badge/browser-✓-345?labelColor=345&color=345&style=flat-square) ![TypeScript](https://img.shields.io/badge/TypeScript-✓-345?labelColor=345&color=345&style=flat-square)

# yd-sdk

*Typed isomorphic Yandex Disk SDK*

## Installation

```
npm i yd-sdk
```

## Import

```ts
import {sdk} from 'yd-sdk';
```

## Initialization

```ts
let api = sdk();
```

or with an OAuth token required to access non-public resources:

```ts
let api = sdk({
    token: 'xxx',
});
```

or with a custom setup:

```ts
let api = sdk({
    token: 'xxx',
    endpoint: '/yd-api',
    headers: {
        'x-csrf-token': 'xxx',
    },
});
```

## API call examples

```ts
let {ok, status, body: storageInfo} = await api.storage.info();
```

```ts
let {ok, status, body} = await api.info({path: '/', limit: 10});
```

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

The method parameters are the query parameters of the corresponding API methods.

## Utilities

### `isOperationLink()`, `getOperationId()`

Some API methods (and the corresponding SDK methods, like `.copy()` or `.move()`) return either a `Link` object pointing to the processed resource or an `OperationLink` object with a link to an operation in progress. The utility functions `isOperationLink()` and `getOperationId()` help handle API responses of these types.

```ts
import {isOperationLink, getOperationId} from 'yd-sdk';

let {body: result} = await api.move({from: '/x', path: '/y'});

if (isOperationLink(result)) {
    let operationId = getOperationId(result);

    // track the operation status with
    // `await api.operation({id: operationId})`
}
else {
    // use the processed resource `Link` object
}
```

### `RequestQuery`

The `RequestQuery` generic type helps pick the query portion of the request schema entry:

```ts
import type {GetResource, RequestQuery} from 'yd-sdk';

let params: RequestQuery<GetResource> = {
    path: '/',
    limit: 10,
};

let {ok, status, body} = await api.info(params);
```

## See also

&rarr; [*Yandex Disk API Docs*](https://yandex.com/dev/disk-api/doc/en/)
