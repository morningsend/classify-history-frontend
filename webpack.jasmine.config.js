var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: path.resolve(__dirname, "spec/IncludeSpec.js"),

    output : {
        path: path.resolve(__dirname, "spec"),
        filename: 'spec.js',
        publicPath: path.resolve(__dirname, "spec")
    },
    module :{
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                }
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            },
        ]
    },
    resolve: {
        root: path.resolve(__dirname,"."),
        extensions: ['', '.js', '.json', '.jsx', '.css', '.less', '.scss']
  }
};
