/**
 * 
 * @authors luozh@snail.com
 * @date    2016-03-21 16:42:35
 * @description 主入口模块
 */

import React from 'react';
import { render } from 'react-dom';

// 引入React-Router模块
import { Router, Route, IndexRedirect, Switch as RouterSwitch, Redirect, BrowserRouter } from 'react-router-dom';

// 引入Ant-Design样式 & Animate.CSS样式
import 'animate.css/animate.min.css';
import 'font-awesome/css/font-awesome.min.css';
// 引入单个页面（包括嵌套的子页面）
import Index from './views/home/index/index';
import Baike from './views/home/baike/index';

// 配置路由
render((
    <BrowserRouter>
        <RouterSwitch>
            {/* <Route path='/' component={ () => <Redirect to='/index' component={ Index } />  } /> */}
            <Route path="/index" component={Index} />
            <Route path="/baike" component={Baike} />
        </RouterSwitch>
    </BrowserRouter>
), document.getElementById('app'));