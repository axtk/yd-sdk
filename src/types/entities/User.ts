import type { CountryCode } from "../util/CountryCode.ts";
import type { ISODateString } from "../util/ISODateString.ts";

export type User = {
  uid: string;
  login: string;
  display_name: string;
  country?: CountryCode;
  reg_time?: ISODateString;
  is_child?: boolean;
};
