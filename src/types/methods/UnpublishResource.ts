import type { SchemaEntry } from "sdkify";
import type { Link } from "../entities/Link.ts";
import type { PathString } from "../util/PathString.ts";

export type UnpublishResource = SchemaEntry<{
  request: {
    query: {
      path: PathString;
    };
  };
  response: {
    status: 200;
    body: Link;
  };
}>;
