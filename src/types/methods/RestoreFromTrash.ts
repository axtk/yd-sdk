import type { SchemaEntry } from "@t8/sdk-factory";
import type { Link } from "../entities/Link.ts";
import type { OperationLink } from "../entities/OperationLink.ts";
import type { PathString } from "../util/PathString.ts";

export type RestoreFromTrash = SchemaEntry<{
  request: {
    query: {
      path: PathString;
      name?: string;
      /** @default false */
      overwrite?: boolean;
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
