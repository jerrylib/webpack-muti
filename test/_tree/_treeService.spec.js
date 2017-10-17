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
    }];
    var tree = initTree(nodes,{});
    //组件树形结构时不会影响原有数据
    expect(undefined).toEqual(nodes[0].children);
    expect(1).toEqual(tree.length);
    expect(2).toEqual(tree[0].children.length);
  });
});