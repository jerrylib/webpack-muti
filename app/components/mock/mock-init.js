/**
 * description: mock启动文件，用于加载各个mock配置文件
 * file: mock-init
 * author: 佳期
 * date: 2017-5-0 1:29:17
 */

import Mock from 'mockjs';
import generator from './mock-generator';
import libin from './mock-libin';
let configArray = [generator, libin];
//批量加载mock配置文件
[].slice.call(configArray).forEach(function (configData) {
    if (configData.enable) {
        loadMockConfig(configData.mock);
    }
});
function loadMockConfig(mocks) {
    [].slice.call(mocks).forEach(function (mock) {
        if (mock.enable) {
            Mock.mock(mock.url, mock.method, mock.template);
        }
    });
}