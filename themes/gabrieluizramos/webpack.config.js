
const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {

    // general config
    entry: './assets/index.js',
    output: {
        filename: 'dist.js',
        path: path.resolve(__dirname, 'source'),
        publicPath: path.resolve(__dirname, 'source')
    },

    // DevServer config
    devServer: {
      publicPath: '/source/',
      port: 8080
    },

    // rules config
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader?outputStyle=compressed']
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