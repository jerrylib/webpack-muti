/*
 * @Author: libin
 * @Date: 2017-10-25 10:26:14
 * @Last Modified by: libin
 * @Last Modified time: 2018-01-18 20:20:02
 */
import {addValue, getValue} from './_data/_dataService';
import {initTree} from './_tree/_treeService';
import {signArray} from './_array/_arrayService';
import {getAuthHeader} from './_auth/_authService';
import {sum} from './_demo/_demoService';

export default {
  /**
   * 添加键值对
   */
  addValue,
  /**
   * 获取键值对的值
   */
  getValue,
  /**
   * 扁平化数据构建树形结构
   */
  initTree,
  /**
   * 基础列表、选中列表对比选中
   */
  signArray,
  /**
   * 计算http请求auth头
   */
  getAuthHeader,
  sum
};
