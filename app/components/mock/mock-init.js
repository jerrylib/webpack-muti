/**
 *
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
var obj = new XMLHttpRequest(); // XMLHttpRequest对象用于在后台与服务器交换数据
obj.open('GET', '/v0.1/test', true);
obj.onreadystatechange = function () {
    if (obj.readyState === 4 && obj.status === 200 || obj.status === 304) { // readyState==4说明请求已完成
        //fn.call(this, obj.responseText); //从服务器获得数据
    }
};
obj.send(null);
var obj1 = new XMLHttpRequest();
obj1.open('GET', '/v0.2/demo', true);
obj1.onreadystatechange = function () {
    if (obj1.readyState === 4 && obj1.status === 200 || obj1.status === 304) { // readyState==4说明请求已完成
        //fn.call(this, obj.responseText); //从服务器获得数据
    }
};
obj1.send(null);