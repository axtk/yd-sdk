import type { SchemaEntry } from "sdkify";
import type { Disk } from "../entities/Disk.ts";

export type GetDisk = SchemaEntry<{
  request: void | {
    query: void;
  };
  response: {
    status: 200;
    body: Disk;
  };
}>;
