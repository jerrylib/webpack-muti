/*
 * @Author: libin
 * @Date: 2017-10-25 10:26:21
 * @Last Modified by: libin
 * @Last Modified time: 2018-01-15 14:49:36
 */
import {addValue, getValue} from 'src/_data/_dataService';

describe('This is dataService test', function () {
  it('addValue and getValue fn test', function () {
    addValue('test', 123);
    expect(123).toEqual(getValue('test'));
  });
});
