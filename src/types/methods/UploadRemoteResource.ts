import type { SchemaEntry } from "@t8/sdk-factory";
import type { FieldList } from "../entities/FieldList.ts";
import type { OperationLink } from "../entities/OperationLink.ts";
import type { PathString } from "../util/PathString.ts";
import type { URLString } from "../util/URLString.ts";

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
