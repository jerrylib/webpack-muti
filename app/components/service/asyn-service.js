import isString from 'lodash/isString';

export function isEmptyString(str) {
    return !str || !isString(str);
}
