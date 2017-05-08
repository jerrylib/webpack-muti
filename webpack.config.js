//process.env.npm_lifecycle_event为dev或build，用于判断是否是本地启动
const isProd = process.env.npm_lifecycle_event === 'build';
var merge = require('webpack-merge');
//默认配置文件
var baseConfig = require('./webpack-env/base.config');
//拓展配置文件，视启动情况而定
console.log('isProd',isProd);
var extendConfig = isProd ? require('./webpack-env/prod.config') : require('./webpack-env/dev.config');
var config = merge({}, baseConfig, extendConfig);
module.exports = config;