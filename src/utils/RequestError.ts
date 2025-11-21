import { RequestError as BaseRequestError } from "@t8/sdk-factory";
import type { Error as ErrorShape } from "../types/entities/Error.ts";

export class RequestError extends BaseRequestError<ErrorShape> {}
