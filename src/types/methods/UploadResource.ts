import type { SchemaEntry } from "@t8/sdk-factory";
import type { FieldList } from "../entities/FieldList";
import type { Link } from "../entities/Link";
import type { PathString } from "../util/PathString";

export type UploadResource = SchemaEntry<{
  request: {
    query: {
      path: PathString;
      /** @default false */
      overwrite?: boolean;
      fields?: FieldList;
    };
  };
  response: {
    status: 200;
    /** Upload target link */
    body: Link;
  };
}>;
