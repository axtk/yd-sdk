import type { OperationLink } from "../types/entities/OperationLink.ts";

export function isOperationLink(x: unknown): x is OperationLink {
  return (
    x !== null &&
    typeof x === "object" &&
    "href" in x &&
    typeof x.href === "string" &&
    /\/disk\/operations\b/.test(x.href)
  );
}
