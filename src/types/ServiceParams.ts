import type { TransformInput } from "@t8/sdk-factory";

export type ServiceParams =
  | {
      token?: string;
      endpoint?: string;
      headers?: Record<string, unknown>;
    }
  | {
      transformInput: TransformInput;
    };
