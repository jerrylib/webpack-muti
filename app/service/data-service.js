/**
 * description:
 * file: data-service
 * author: 佳期
 * date: 2017-5-0 1:31:45
 */
import isString from 'lodash/isString';

var data = {};
function addValue(key, value) {
    data[key] = value;
}
function getValue(key) {
    return isString(key) && data[key];
}
module.exports =  {
    addValue,getValue
};
