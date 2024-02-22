const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
module.exports = {
    entry: {
        popup: './src/popup.js',
        background: './src/background.js',
        contentScript: './src/contentScript.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    module: {
        rules: [

        ]
    },

    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },

    plugins:
        [
            new HtmlWebpackPlugin({
                title: 'chrome-ext-vanilla-js',
                template: "static/popup.html",
                chunks: ['popup']
            }),

            new CopyPlugin({

                patterns: [
                    "static"
                ],
            }),

        ]
};