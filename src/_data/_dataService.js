/**
 * dataService
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