import type {URLString} from '~/src/types/util/URLString';

export type Link = {
    href: URLString;
    method: 'GET' | 'PUT';
    /**
     * Whether the `href` value is templated and contains placeholders
     * to be filled out before the link can be used.
     */
    templated: boolean;
};
