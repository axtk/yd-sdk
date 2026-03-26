import { RequestError as BaseRequestError } from "sdkify";
import type { Error as ErrorShape } from "../types/entities/Error.ts";

export class RequestError extends BaseRequestError<ErrorShape> {}
