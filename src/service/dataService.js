let map = {};

function addValue(key, value) {
  console.log(`设置键值对${key}=${value}`);
  map[key] = value;
}

function getValue(key) {
  console.log(`获取键值对key='${key}'`);
  return map[key];
}

export {
  addValue,
  getValue
};