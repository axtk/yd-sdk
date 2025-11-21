import type { Resource } from "./Resource.ts";
import type { ResourceType } from "./ResourceType.ts";

export type PublicResourceList = {
  items: Partial<Resource>[];
  type: ResourceType;
  limit: number;
  offset: number;
};
