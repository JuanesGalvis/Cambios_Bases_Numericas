'use strict';

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Copywebpack = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtract = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    context: path.resolve(__dirname),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader' },
            },
            {
                test: /\.css$/,
                use : [
                    'style-loader',
                    MiniCSSExtract.loader,
                    'css-loader'
                ],
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    },
    devtool: 'source-map',
    plugins: [
        new HTMLWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCSSExtract({
            filename: 'assets/[name].[contenthash].css'
        }),
        new Copywebpack({
            patterns: [
                {
                    from: path.resolve(__dirname, 'public/favicon.ico'),
                    to: './'
                }
            ]
          }),
        new CleanWebpackPlugin()
    ]
};