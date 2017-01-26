const ExtractTextPlugin = require('extract-text-webpack-plugin');
// css样式从js文件中分离出来，需要通过命令行安装 extract-text-webpack-plugin 依赖包

module.exports = {
    entry: {
        dist: './app.js'
    },
    output: {
        path: './dist/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css')
            },
            //解析.scss文件,对于用 import 或 require 引入的sass文件进行加载，以及<style lang="sass">...</style>声明的内部样式进行加载
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css!sass')
            }
        ]

    },
    devServer: {
        hot: true,
        inline: true
    },
    plugins: [
        new ExtractTextPlugin('style.css')  // 提取出来的样式放在dist下的style.css文件中
    ],
    resolve: {
        extensions: ['', '.coffee', '.js', '.jsx', '.css', '.scss']
    }
};
