import type { SchemaEntry } from "@t8/sdk-factory";
import type { FieldList } from "../entities/FieldList";
import type { OperationLink } from "../entities/OperationLink";
import type { PathString } from "../util/PathString";
import type { URLString } from "../util/URLString";

export type UploadRemoteResource = SchemaEntry<{
  request: {
    query: {
      url: URLString;
      path: PathString;
      /** @default false */
      disable_redirects?: boolean;
      fields?: FieldList;
    };
  };
  response: {
    status: 202;
    body: OperationLink;
  };
}>;
