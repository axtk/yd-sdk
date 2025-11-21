import type { SchemaEntry } from "@t8/sdk-factory";
import type { FieldList } from "../entities/FieldList.ts";
import type { Resource } from "../entities/Resource.ts";
import type { Sort } from "../entities/Sort.ts";
import type { PathString } from "../util/PathString.ts";

export type GetResource = SchemaEntry<{
  request: {
    query: {
      path: PathString;
      fields?: FieldList;
      sort?: Sort;
      /** @default 20 */
      limit?: number;
      offset?: number;
      preview_size?: string;
      preview_crop?: boolean;
    };
  };
  response: {
    status: 200;
    body: Partial<Resource>;
  };
}>;
