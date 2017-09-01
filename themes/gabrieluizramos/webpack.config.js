
const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {

    // general config
    entry: './assets/index.js',
    output: {
        filename: 'dist.js',
        path: path.resolve(__dirname, 'assets/dist'),
        publicPath: path.resolve(__dirname, 'assets/dist')
    },

    // DevServer config
    devServer: {
      publicPath: '/assets/dist/',
      port: 8080
    },

    // rules config
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },

    // plugins config
    plugins: [
        new ExtractTextPlugin('style.css')
    ]

};

module.exports = config;