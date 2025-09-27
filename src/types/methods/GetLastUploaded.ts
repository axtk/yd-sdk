import type { SchemaEntry } from "@t8/sdk-factory";
import type { FieldList } from "../entities/FieldList";
import type { FileList } from "../entities/FileList";
import type { MediaType } from "../entities/MediaType";

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
