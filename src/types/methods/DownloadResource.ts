import type { SchemaEntry } from "sdkify";
import type { FieldList } from "../entities/FieldList.ts";
import type { Link } from "../entities/Link.ts";
import type { PathString } from "../util/PathString.ts";

export type DownloadResource = SchemaEntry<{
  request: {
    query: {
      path: PathString;
      fields?: FieldList;
    };
  };
  response: {
    status: 200;
    body: Link;
  };
}>;
