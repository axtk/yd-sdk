import type { OperationLink } from "../types/entities/OperationLink.ts";
import type { OperationId } from "../types/util/OperationId.ts";

// Matching against the 2 possible formats:
//
// - "https://cloud-api.yandex.net/v1/disk/operations?id=<id>"
// @see https://yandex.com/dev/disk-api/doc/en/reference/copy
// @see https://yandex.com/dev/disk-api/doc/en/reference/move
// @see https://yandex.com/dev/disk-api/doc/en/reference/delete
//
// - "https://cloud-api.yandex.net/v1/disk/operations/<id>"
// @see https://yandex.com/dev/disk-api/doc/en/reference/operations
export function getOperationId({ href }: OperationLink): OperationId {
  let matches = href.match(/\/disk\/operations(\/([^?\/]+))?\/?(\?id=([^?&]+))?/);

  return matches?.[2] ?? matches?.[4] ?? "";
}
