const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devtool: 'eval-source-map',
    devServer: {
        hot: true,
        watchOptions: {
            poll: true
        },
        proxy: {
            '/dist': 'http://localhost:8000'
        }
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: 'babel-loader',
            },
            {
                test: /\.vue$/,
                use: 'vue-loader',
            },
            {
                test: /\.css$/,
                use: [MiniCSSExtractPlugin.loader, 'css-loader'],
            }
        ]
    },
    entry: './src/main.js',
    plugins: [
        new webpack.HotModuleReplacementPlugin,
        new VueLoaderPlugin,
        new MiniCSSExtractPlugin({
            filename: 'main.css'
        }),
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true,
            favicon: './favicon.ico'
        }),
    ]
}