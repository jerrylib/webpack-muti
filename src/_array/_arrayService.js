/*
 * @Author: libin 
 * @Date: 2017-10-25 15:41:12 
 * @Last Modified by: libin
 * @Last Modified time: 2017-10-25 19:10:30
 */
import _ from 'lodash';
const defaults = {
  // base列表的比对id字段
  baseIndexColumn: 'id',
  // 标注列表的比对id字段
  signIndexColumn: 'id',
  // 选中时的标识字段
  signColumn: 'checked'
};

function signArray(bases, signs, options) {
  //设置默认配置项
  options = _.assign({}, defaults, options);
  //拷贝数组对象
  let list = _.cloneDeep(bases);
  let signMap = _.mapKeys(signs, options.signIndexColumn);
  list.forEach((item) => {
    let mapIten = signMap[item[options.baseIndexColumn]];
    item[options.signColumn] = !!mapIten;
    mapIten && (mapIten.isUsed = true);
  });
  return {
    list,
    unMaplist: _.values(_.filter(signMap, (item) => {
      return !item.isUsed;
    }))
  };
}
export {
  signArray
};