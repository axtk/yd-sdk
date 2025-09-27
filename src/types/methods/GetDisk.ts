import type { SchemaEntry } from "@t8/sdk-factory";
import type { Disk } from "../entities/Disk";

export type GetDisk = SchemaEntry<{
  request: void | {
    query: void;
  };
  response: {
    status: 200;
    body: Disk;
  };
}>;
