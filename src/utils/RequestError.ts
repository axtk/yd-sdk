import {RequestError as BaseRequestError} from 'reqsrv';
import {Error as ErrorShape} from '../types/entities/Error';

export const RequestError = BaseRequestError<ErrorShape>;
