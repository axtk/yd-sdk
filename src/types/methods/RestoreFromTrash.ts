import type { SchemaEntry } from "@t8/sdk-factory";
import type { Link } from "../entities/Link";
import type { OperationLink } from "../entities/OperationLink";
import type { PathString } from "../util/PathString";

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
