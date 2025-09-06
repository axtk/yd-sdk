import {RequestError as BaseRequestError} from '@t8/sdk-factory';
import {Error as ErrorShape} from '../types/entities/Error';

export class RequestError extends BaseRequestError<ErrorShape> {};
