import type { OperationLink } from "../types/entities/OperationLink.ts";
import type { OperationId } from "../types/util/OperationId.ts";

export function getOperationId({ href }: OperationLink): OperationId {
  try {
    return new URL(href).searchParams.get("id") ?? "";
  } catch {
    return "";
  }
}
