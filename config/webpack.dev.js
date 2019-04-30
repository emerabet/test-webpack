const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: ['webpack-hot-middleware/client?reload=true', './src/main.js']
    },
    mode: 'development',
    output: {
        filename: '[name]-bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: 'dist',
        overlay: true,
        hot: true,
    },
    module: {
        rules: [

            {
                test: /\.(js|jsx)$/,
                use: [
                    { loader: 'babel-loader'},
                ],
                exclude: /node_modules/
            },

            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader'},
                    { loader: 'css-loader'}
                ]
            },

            {
                test: /\.html$/,
                use: [
                    { 
                        loader: 'html-loader',
                        options: {
                            attrs: ['img:src']
                        }
                    }
                ]
            },

            {
                test: /\.(jpg|gif|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[hash:8].[ext]'
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            inject: true,
        }),
    ]
}