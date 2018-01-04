'use strict';
var webpack = require('webpack');

module.exports = function(_path) {
    return {
        context: _path,
        // 配置webpack如何生成Source Map 默认值为false
        devtool: 'source-map',
        devServer: {
            contentBase: './dist',
            hot: true,
            inline: true
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    };
};