import type { SchemaEntry } from "@t8/sdk-factory";
import type { OperationLink } from "../entities/OperationLink.ts";
import type { PathString } from "../util/PathString.ts";

export type ClearTrash = SchemaEntry<{
  request: void | {
    query: void | {
      /** If path is not provided, everything in the trash is removed. */
      path?: PathString;
    };
  };
  response:
    | {
        status: 204;
        body: undefined;
      }
    | {
        status: 202;
        body: OperationLink;
      };
}>;
