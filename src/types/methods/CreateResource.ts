import type { SchemaEntry } from "@t8/sdk-factory";
import type { FieldList } from "../entities/FieldList";
import type { Link } from "../entities/Link";
import type { PathString } from "../util/PathString";

export type CreateResource = SchemaEntry<{
  request: {
    query: {
      path: PathString;
      fields?: FieldList;
    };
  };
  response: {
    status: 201;
    body: Link;
  };
}>;
