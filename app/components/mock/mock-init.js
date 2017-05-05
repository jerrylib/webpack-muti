import generator from './mock-generator';
import Mock from 'mockjs';
console.log(generator);
if (generator.enable) {
    [].slice.call(generator.mock).forEach(function (mock) {
        if (mock.enable) {
            console.log(mock);
            Mock.mock(mock.url, mock.method, mock.template);
        }
    });
}
var obj = new XMLHttpRequest(); // XMLHttpRequest对象用于在后台与服务器交换数据          
obj.open('GET', '/v0.1/test', true);
obj.onreadystatechange = function () {
    if (obj.readyState == 4 && obj.status == 200 || obj.status == 304) { // readyState==4说明请求已完成
        //fn.call(this, obj.responseText); //从服务器获得数据
        console.log(obj.responseText);
    }
};
obj.send(null);
obj.open('GET', '/v0.2/tes', true);
obj.onreadystatechange = function () {
    if (obj.readyState == 4 && obj.status == 200 || obj.status == 304) { // readyState==4说明请求已完成
        //fn.call(this, obj.responseText); //从服务器获得数据
        console.log(obj.responseText);
    }
};
obj.send(null);