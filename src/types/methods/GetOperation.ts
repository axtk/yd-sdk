import type { SchemaEntry } from "@t8/sdk-factory";
import type { OperationStatus } from "../entities/OperationStatus.ts";

export type GetOperation = SchemaEntry<{
  request: {
    query: {
      id: string;
    };
  };
  response: {
    status: 200;
    body: {
      status: OperationStatus;
    };
  };
}>;
