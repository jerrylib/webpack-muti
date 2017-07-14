/**
 * webpack的基础配置文件。
 */
var path = require('path');
var webpack = require('webpack');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname, '..');
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var aliasPath = require(path.resolve(ROOT_PATH, 'app/alias.config.js'));
var config = {
    //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
    entry: {
        app: APP_PATH
    },
    //输出的文件名 合并以后的js会命名为bundle.js
    output: {
        path: BUILD_PATH,
        filename: 'js/[name]-[hash:8].js',
        chunkFilename: 'js/chunk-[hash:8]-[name].js'
    },
    //添加我们的插件 会自动生成一个html文件
    plugins: [
        new HtmlwebpackPlugin({
            filename: 'index.html',
            template: path.join(APP_PATH, 'index.html'),
            inject: 'body'
        }),
        new CleanPlugin([BUILD_PATH], {
            root: ROOT_PATH,
            verbose: true, //将log写到 console.
            dry: false, //true时不要删除任何东西
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor']
        }),
        new ExtractTextPlugin('main.[hash:8].css'),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
        })
    ],
    module: {
        loaders: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader'
            })
        },
        {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)\??.*$/,
            loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
        },{
            test: /\.js$/, //是一个正则，代表js或者jsx后缀的文件要使用下面的loader
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            options: {
                presets: ['es2015','stage-0','react'],
                plugins: ['transform-runtime', ['antd',  { 'style': 'css' }]]
            }
        }]
    }
};
if (aliasPath) { //模块别名
    for (var key in aliasPath) {
        aliasPath[key] = path.join(APP_PATH, aliasPath[key]);
    }
    config.resolve = {
        modules: [APP_PATH, path.resolve(ROOT_PATH, 'node_modules')],
        alias: aliasPath
    };
}
module.exports = config;
