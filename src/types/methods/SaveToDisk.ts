import type { SchemaEntry } from "@t8/sdk-factory";
import type { Link } from "../entities/Link.ts";
import type { OperationLink } from "../entities/OperationLink.ts";
import type { PathString } from "../util/PathString.ts";

export type SaveToDisk = SchemaEntry<{
  request: {
    query: {
      public_key: string;
      path?: PathString;
      name?: string;
    };
  };
  response:
    | {
        status: 201;
        body: Link;
      }
    | {
        status: 202;
        body: OperationLink;
      };
}>;
