const webpack = require('webpack');

// Plugins
const autoprefixer = require('autoprefixer');
const ExtractCSS = require('extract-text-webpack-plugin');

// Path
const path = require('path');
const sourcePath = path.resolve(process.cwd(), 'assets');

const config = {

    // general config
    entry: {
        app:  './assets/index.js',
        article: './assets/article.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'source'),
        publicPath: path.resolve(__dirname, 'source')
    },

    // DevServer config
    devServer: {
      publicPath: '/blog/',
      port: 8080
    },

    // rules config
    module: {
        rules: [
            { // babel config
                test: /\.jsx?$/,
                include: sourcePath,
                use: [
                  'babel-loader'
                ]
            },
            
            
            { // scss config
                test: /\.scss$/,
                include: sourcePath,
                use: ExtractCSS.extract({
                  fallback: 'style-loader',
                  use: [
                    'css-loader',
                    {
                      loader: 'postcss-loader',
                      options: {
                        plugins: [autoprefixer]
                      }
                    },
                    'sass-loader'
                  ]
                })
            }
        ]
    },

    // plugins config
    plugins: [
        new ExtractCSS('style.css')
    ]

};

module.exports = config;