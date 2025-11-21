import type { ResourceItem } from "./ResourceItem.ts";
import type { Sort } from "./Sort.ts";

export type ResourceList = {
  sort: Sort;
  public_key: string;
  items: Partial<ResourceItem>[];
  path: string;
  limit: number;
  offset: number;
  total: number;
};
