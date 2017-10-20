import isObject from 'lodash/isObject';
import isArray from 'lodash/isArray';
import isFunction from 'lodash/isFunction';
import forEach from 'lodash/forEach';
import noop from 'lodash/noop';

 /**
  * 递归执行调用方法
  * @param  {Object|Array} collection 对象集合
  * @param  {String} key        子级字段名
  * @param  {Function} method   递归调用的方法
  * @return {undefined}         无
  */
function recursionChildren(collection, key, method = noop) {
    if (isObject(collection) && !isArray(collection)) {
        collection = [collection];
    }

    forEach(collection, function (item) {
        var children = item[key];
        method.call(null, item);
        recursionChildren(children, key, method);
    });
}

/**
 * 遍历树节点
 * @param  {Object | Array} tree             树
 * @param  {Function} method                 每个节点调用的方法
 * @param  {String} [childrenKey='children'] 子节点树形名称
 * @return {undefined}                        无返回值
 */
export default function traverseTree(tree, method, childrenKey = 'children') {
    if (!isObject(tree)) {
        return;
    }
    if (!isFunction(method)) {
        return;
    }

    recursionChildren(tree, childrenKey, method);
}
