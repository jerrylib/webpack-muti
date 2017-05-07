import 'lodash';
import 'bootstrap-css-only';
import './theme/css/style.css';
import './components/mock/mock-init.js';

import dataService from  'dataService';

dataService.addValue('test',121113);
console.log(dataService.getValue('test'));