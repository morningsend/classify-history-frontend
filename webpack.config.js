var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    context: path.join(__dirname + '/app'),
    entry: {
        index: path.resolve(__dirname, "app/index.js"),
    },
    
    output : {
        path: path.resolve(__dirname, "app/build"),
        filename: 'bundle.js'
    },
    module :{
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                }
            },
            {
                test: /\.less$/,
                loader: "style!css!less",
            },
            {
                test: /\.css$/,
                loader: "style!css",
            },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    
        ]
    },
    plugins: [ new ExtractTextPlugin("[name].css") ],
}