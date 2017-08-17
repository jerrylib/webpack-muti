/**
 * 
 * @authors luozh@snail.com
 * @date    2016-03-21 16:42:35
 * @description 主入口模块
 */
import React from 'react';
import { render } from 'react-dom';
import './theme/css/style.css';
// 引入Ant-Design样式 & Animate.CSS样式
import 'animate.css/animate.min.css';
import 'font-awesome/css/font-awesome.min.css';
// 引入单个页面（包括嵌套的子页面）
import Home from './views/home/index';
import NoMatch from './views/home/noMatch';
// 配置路由
render((
    <Home></Home>
), document.getElementById('app'));