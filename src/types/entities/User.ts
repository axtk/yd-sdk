import type {CountryCode} from '../util/CountryCode';
import type {ISODateString} from '../util/ISODateString';

export type User = {
    uid: string;
    login: string;
    display_name: string;
    country?: CountryCode;
    reg_time?: ISODateString;
    is_child?: boolean;
};
