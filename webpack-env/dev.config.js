/**
 * webpack本地开发时的配置文件
 */
var webpack = require('webpack');
module.exports = {
    devtool: 'eval',
    //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
    devServer: {
        historyApiFallback: true,
        port: 8091,
        hot: true,
        inline: true,
    },
    plugins:[new webpack.HotModuleReplacementPlugin()]
};