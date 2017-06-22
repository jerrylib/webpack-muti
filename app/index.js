import 'lodash';
import 'bootstrap-css-only';
import './theme/css/style.css';
import './components/mock/mock-init.js';

import dataService from 'dataService';

dataService.addValue('test',121113);
console.log(dataService.getValue('test'));

// 异步 chunk 设置
import('./components/service/asyn-service').then(function ({ isEmptyString }) {
    console.log(isEmptyString('str'), isEmptyString(''));
});
