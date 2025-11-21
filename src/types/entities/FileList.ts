import type { ResourceItem } from "./ResourceItem.ts";

export type FileList = {
  items: Partial<ResourceItem>[];
  limit: number;
  offset: number;
};
