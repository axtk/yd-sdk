import type { ResourceItem } from "./ResourceItem.ts";
import type { ResourceList } from "./ResourceList.ts";
import type { ResourceType } from "./ResourceType.ts";
import type { User } from "./User.ts";

export type Resource<T extends ResourceType = ResourceType> =
  ResourceItem<T> & {
    _embedded?: ResourceList;
    views_count?: number;
    owner?: Pick<User, "uid" | "login" | "display_name">;
  };
