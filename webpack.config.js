var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var autoprefixer = require('autoprefixer');
module.exports = {
    entry: {
        // test:path.resolve(__dirname,)
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
                loader: ExtractTextPlugin.extract("style","css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap")
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style","css?minimize!less"),
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style","css"),
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
    postcss:[autoprefixer],
    plugins: [ new ExtractTextPlugin("style.css",{ allChunks: true} )],
    resolve: {
        root: path.resolve('__dirname'),
        extensions: ['', '.js', '.json', '.jsx', '.css', '.less', '.scss']
  }
};
