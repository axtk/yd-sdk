# yd-sdk

*Typed isomorphic Yandex Disk SDK*

## Usage

### Installation:

```
npm i yd-sdk
```

### Import

```js
import {sdk} from 'yd-sdk';
```

### Initialization

```js
let api = sdk();
```

or with an OAuth token required to access non-public resources:

```js
let api = sdk({
    token: 'xxx',
});
```

or with a custom setup:

```js
let api = sdk({
    token: 'xxx',
    endpoint: '/yd-api',
    headers: {
        'x-csrf-token': 'xxx',
    },
});
```

### API calls

```js
let {ok, status, body: storageInfo} = await api.storage.info();
```

```js
let {ok, status, body} = await api.info({path: '/', limit: 10});
```

List of available methods with brief descriptions:

```
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
