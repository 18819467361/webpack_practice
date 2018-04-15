var path = require('path');
var uglifyJsPlugin = require('uglifyjs-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CleanWebpackPlugin=require('clean-webpack-plugin');
module.exports = {
    mode: "development",
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }
        ]
    },
    plugins: [
        new uglifyJsPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html'
        }),
        new CopyWebpackPlugin([{from: __dirname + '/src/images', to: __dirname + '/dist/images'}]),
        new ExtractTextPlugin("style.css"),
        new CleanWebpackPlugin(['dist'])
    ]
}