import type { SchemaEntry } from "@t8/sdk-factory";
import type { FieldList } from "../entities/FieldList.ts";
import type { Link } from "../entities/Link.ts";
import type { OperationLink } from "../entities/OperationLink.ts";
import type { PathString } from "../util/PathString.ts";

export type MoveResource = SchemaEntry<{
  request: {
    query: {
      from: PathString;
      path: PathString;
      /** @default false */
      overwrite?: boolean;
      fields?: FieldList;
    };
  };
  response: // file or empty directory
    | {
        status: 201;
        body: Link;
      }
    // non-empty directory
    | {
        status: 202;
        body: OperationLink;
      };
}>;
