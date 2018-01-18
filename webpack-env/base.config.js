/**
 * webpack的基础配置文件。
 */
var path = require('path');
var webpack = require('webpack');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname, '..');
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
console.log('ROOT_PATH', ROOT_PATH, BUILD_PATH)
var CleanPlugin = require('clean-webpack-plugin');
var config = {
  entry: {
    index: APP_PATH + '/index.js'
  },
  output: {
    path: BUILD_PATH,
    filename: 'dist/[name].js',
    chunkFilename: 'dist/chunk.js',
    library: 'rpService',
    libraryTarget: 'umd'
  },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    }
  },
  //添加我们的插件 会自动生成一个html文件
  plugins: [
    new CleanPlugin(['dist/**/*.*'], {
      root: `${ROOT_PATH}/build`,
      verbose: true, //将log写到 console.
      dry: false, //true时不要删除任何东西
      exclude: ['package.json']
    }),
    // new webpack   .optimize   .CommonsChunkPlugin({names: ['vendor']}),
    new webpack
      .optimize
      .UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/, //是一个正则，代表js或者jsx后缀的文件要使用下面的loader
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  }

}
module.exports = config;
