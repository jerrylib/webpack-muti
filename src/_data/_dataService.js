/*
 * @Author: libin 
 * @Date: 2017-10-25 10:24:09 
 * @Last Modified by: libin
 * @Last Modified time: 2017-10-25 10:25:31
 */

let map = {};

function addValue(key, value) {
  map[key] = value;
}

function getValue(key) {
  return map[key];
}

export {
  addValue,
  getValue
};