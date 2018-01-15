/*
 * @Author: libin
 * @Date: 2017-10-25 10:26:21
 * @Last Modified by: libin
 * @Last Modified time: 2018-01-15 14:59:16
 */
import {sum} from 'src/_demo/_demoService';

describe('这段代码用于测试demoService', function () {
  it('测试demoService的sum()方法', function () {
    let value = sum(1, 2);
    expect(value).toEqual(3);
    // expect(value).toEqual(4); // 1+2=3如果此时我们做了错误的断言，则会提示测试用例不通过
  });
});
