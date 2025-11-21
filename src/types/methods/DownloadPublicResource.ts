import type { SchemaEntry } from "@t8/sdk-factory";
import type { Link } from "../entities/Link.ts";
import type { PathString } from "../util/PathString.ts";

export type DownloadPublicResource = SchemaEntry<{
  request: {
    query: {
      public_key: string;
      path?: PathString;
    };
  };
  response: {
    status: 200;
    body: Link;
  };
}>;
