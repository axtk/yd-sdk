import type { OperationLink } from "../types/entities/OperationLink";

export function isOperationLink(x: unknown): x is OperationLink {
  if (
    !x ||
    typeof x !== "object" ||
    !("href" in x) ||
    typeof x.href !== "string"
  )
    return false;

  try {
    return new URL(x.href).pathname.endsWith("/disk/operations");
  } catch {
    return false;
  }
}
