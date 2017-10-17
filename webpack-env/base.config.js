/**
 * webpack的基础配置文件。
 */
var path = require('path');
var webpack = require('webpack');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname, '..');
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var CleanPlugin = require('clean-webpack-plugin');
var config = {
    //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
    entry: {
        index: APP_PATH
    },
    //输出的文件名 合并以后的js会命名为bundle.js
    output: {
        path: BUILD_PATH,
        filename: 'dist/[name].js',
        chunkFilename: 'dist/chunk.js'
    },
    //添加我们的插件 会自动生成一个html文件
    plugins: [
        new CleanPlugin([BUILD_PATH], {
            root: ROOT_PATH+'/dist',
            verbose: true, //将log写到 console.
            dry: false, //true时不要删除任何东西
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor']
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
        })
    ],
    module: {
        loaders: [{
            test: /\.js$/, //是一个正则，代表js或者jsx后缀的文件要使用下面的loader
            exclude: /(node_modules)/,
            use:{
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }
        }]
    }
};
module.exports = config;
