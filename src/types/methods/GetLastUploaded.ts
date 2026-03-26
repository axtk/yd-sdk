import type { SchemaEntry } from "sdkify";
import type { FieldList } from "../entities/FieldList.ts";
import type { FileList } from "../entities/FileList.ts";
import type { MediaType } from "../entities/MediaType.ts";

export type GetLastUploaded = SchemaEntry<{
  request: void | {
    query: void | {
      fields?: FieldList;
      /** @default 20 */
      limit?: number;
      media_type?: MediaType;
      preview_size?: string;
      preview_crop?: boolean;
    };
  };
  response: {
    status: 200;
    body: Omit<FileList, "offset">;
  };
}>;
