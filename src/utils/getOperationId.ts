import type { OperationLink } from "../types/entities/OperationLink";
import type { OperationId } from "../types/util/OperationId";

export function getOperationId({ href }: OperationLink): OperationId {
  try {
    return new URL(href).searchParams.get("id") ?? "";
  } catch {
    return "";
  }
}
