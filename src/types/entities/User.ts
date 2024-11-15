import type {CountryCode} from '~/src/types/util/CountryCode';
import type {ISODateString} from '~/src/types/util/ISODateString';

export type User = {
    uid: string;
    login: string;
    display_name: string;
    country?: CountryCode;
    reg_time?: ISODateString;
    is_child?: boolean;
};
