var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
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
                test: /\.scss$/, 
                loader: "style!css!sass"
            },
            {
                test: /\.less$/,
                loader: "style!css!less",
            },
            {
                test: /\.css$/,
                loader: "style!css",
            },
            {   
                test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader" 
            },
            {
                test: /\.jsx?$/,
                include: /app/,
                exclude: /(node_modules|server)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                }
            }
        ]
    },
    //plugins: [ new ExtractTextPlugin("style.css",{ allChunks: true} )],
    resolve: {
        extensions: ['', '.js', '.json', '.jsx', '.css', '.less', '.scss'] 
  }
};