/*
 * @Author: libin 
 * @Date: 2017-10-25 10:27:31 
 * @Last Modified by: libin
 * @Last Modified time: 2017-10-25 13:36:20
 */
import {
  initTree
} from './../../src/_tree/_treeService';

describe('This is treeService test', function () {
  it('initTree fn test', function () {
    var nodes = [{
      id: 1,
      parent_id: 'ROOT',
      name: 'name1'
    }, {
      id: 2,
      parent_id: 1,
      name: 'name2'
    }, {
      id: 3,
      parent_id: 1,
      name: 'name3'
    }, {
      id: 4,
      parent_id: 'ROOT',
      name: 'name4'
    }];
    var option ={ ds:1};
    var tree = initTree(nodes,option);
    //组件树形结构时不会影响原有数据
    expect(undefined).toEqual(nodes[0].children);
    // 验证传入的option对象未被污染
    expect(undefined).toEqual(option.childrenKey);
    expect(2).toEqual(tree.length);
    expect(2).toEqual(tree[0].children.length);
    
    //验证每个层级上的对象的level字段。。从1开始
    (function levelCheck(node,level){
      if(node && node.length > 0){
        node.forEach((child) => {
          expect(child.level).toEqual(level);
          levelCheck(child['children'],level+1);
        });
      }
    })(tree,1);
  });
});