import type { SchemaEntry } from "sdkify";
import type { FieldList } from "../entities/FieldList.ts";
import type { Resource } from "../entities/Resource.ts";
import type { PathString } from "../util/PathString.ts";

export type SetCustomProperties = SchemaEntry<{
  request: {
    query: {
      path: PathString;
      fields?: FieldList;
    };
    body: {
      custom_properties: Record<string, string | null>;
    };
  };
  response: {
    status: 200;
    body: Partial<Resource>;
  };
}>;
