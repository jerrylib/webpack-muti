/**
 * description:
 * file: data-service
 * author: 佳期
 * date: 2017-5-0 1:31:45
 */
var data = {};

function addValue(key, value) {
    data[key] = value;
}

function getValue(key) {
    return data[key];
}
export default {
    addValue: addValue,
    getValue: getValue
};