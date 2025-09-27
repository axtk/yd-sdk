import type { ResourceItem } from "./ResourceItem";

export type FileList = {
  items: Partial<ResourceItem>[];
  limit: number;
  offset: number;
};
