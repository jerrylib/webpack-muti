/*
 * @Author: libin 
 * @Date: 2017-10-25 10:24:17 
 * @Last Modified by: libin
 * @Last Modified time: 2017-10-25 19:08:43
 */
import _ from 'lodash';

const defaults = {
  // 子节点存放的字段
  childrenKey: 'children',
  // 父id存放字段
  parentKey: 'parent_id',
  // 条目id存放字段
  itemIdentifier: 'id',
  // 跟节点判断函数 找不到父节点的或 parentKey字段是'ROOT'的
  rootSniffer: function (treeItem, parentKey) {
    return !treeItem[parentKey] || treeItem[parentKey] === 'ROOT';
  },
};
/**
 * 初始化属性结构
 * @param {*} nodes 扁平化数据
 * @param {*} options 配置项
 */
function initTree(nodes, options) {
  //设置默认配置项
  options = _.assign({}, defaults, options);
  //拷贝数组对象
  var array = _.cloneDeep(nodes);
  var treeItems = {},
    parentKey = options.parentKey,
    childrenKey = options.childrenKey,
    itemIdentifier = options.itemIdentifier;
  //将所有条目都构建成map
  _.forEach(array, function (item) {
    treeItems[item[itemIdentifier]] = item;
  });
  //迭代map，为所有的条目添加儿子节点。
  _.forEach(treeItems, function (treeItem) {
    var p = treeItems[treeItem[parentKey]];
    if (p) {
      if (!p[childrenKey]) {
        p[childrenKey] = [];
      }
      p[childrenKey].push(treeItem);
    }
  });
  return _findRoot(treeItems, options);
}
/**
 * 查找获得根结点
 * @param {*} treeItems
 * @param {*} options
 */
function _findRoot(treeItems, options) {
  let parentKey = options.parentKey;
  let treeArray = _.filter(treeItems, function (treeItem) {
    return options.rootSniffer(treeItem, parentKey);
  });

  (function addLevel(tree, level) {
    if (!tree || tree.length === 0) {
      return;
    }
    tree.forEach((item) => {
      item.level = level;
      addLevel(item[options.childrenKey], level + 1);
    });
  })(treeArray, 1);
  return treeArray;
}
export {
  initTree
};