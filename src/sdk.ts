import type { ServiceParams } from "./types/ServiceParams.ts";
import { getService } from "./utils/getService.ts";

/**
 * Creates an entrypoint to the API.
 *
 * @example
 * ```
 * let api = sdk();
 * ```
 *
 * @example
 * ```
 * let api = sdk({ token: "xxx" });
 * ```
 *
 * @example
 * ```
 * let api = sdk({
 *   token: "xxx",
 *   endpoint: "/yd-api",
 *   headers: {
 *     "x-csrf-token": "xxx",
 *   },
 * });
 * ```
 *
 * @example
 * ```
 * let { ok, status, body: storageInfo } = await api.storage.info();
 * ```
 *
 * @example
 * ```
 * let { ok, status, body } = await api.info({ path: "/", limit: 10 });
 * ```
 */
export function sdk(params: ServiceParams = {}) {
  let service = getService(params);

  return {
    public: service.getQueryEntry({
      info: "GET /disk/public/resources",
      list: "GET /disk/resources/public",
      download: "GET /disk/public/resources/download",
      save: "POST /disk/public/resources/save-to-disk",
    }),
    storage: service.getQueryEntry({
      info: "GET /disk",
    }),
    ...service.getQueryEntry({
      info: "GET /disk/resources",
      list: "GET /disk/resources/files",
      recent: "GET /disk/resources/last-uploaded",
      create: "PUT /disk/resources",
      copy: "POST /disk/resources/copy",
      move: "POST /disk/resources/move",
      remove: "DELETE /disk/resources",
      publish: "PUT /disk/resources/publish",
      unpublish: "PUT /disk/resources/unpublish",
      upload: "GET /disk/resources/upload",
      uploadFromURL: "POST /disk/resources/upload",
      download: "GET /disk/resources/download",
      operation: "GET /disk/operations",
    }),
    ...service.getEntry({
      update: "PATCH /disk/resources",
    }),
    trash: service.getQueryEntry({
      clear: "DELETE /disk/trash/resources",
      restore: "PUT /disk/trash/resources/restore",
    }),
  };
}

export type SDK = ReturnType<typeof sdk>;
