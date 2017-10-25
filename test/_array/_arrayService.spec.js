/*
 * @Author: libin 
 * @Date: 2017-10-25 15:40:04 
 * @Last Modified by: libin
 * @Last Modified time: 2017-10-25 19:09:18
 */

import {
  signArray
} from './../../src/_array/_arrayService';

describe('This is arrayService test', function () {
  it('signArray fn test', function () {
    let bases = [],
      signs = [];
    for (let i = 0; i < 10; i++) {
      bases.push({
        id: i,
        name: `name${i}`
      });
      i < 5 && signs.push({
        id: i,
        name: `name${i}`
      });
    }
    signs.push({
      id: 20,
      name: 'name20'
    });
    let obj = signArray(bases,signs,{signColumn: 'checkd'});
    obj.list.forEach((item,index) => {
      expect(index < 5).toEqual(!!item.checkd);
    });
    expect(1).toEqual(obj.unMaplist.length);
  });
});