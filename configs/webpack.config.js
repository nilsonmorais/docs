const path = require('path');
const webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
	entry: {
		app: './src/main.js',
	},
	output: {
    	path: path.resolve(__dirname, 'dist'),
	    filename: 'js/[name].bundle.js'
	},
	module: {
		loaders:[
		{ test: /font.*\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'file-loader' },
		{ test: /\.css$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })},
		{ test: /\.svg$/, loader: 'svg-inline-loader' },
		]
	},
	resolve: {
        alias: {
            jquery: "jquery/src/jquery"
        }
    },
    plugins: [
		new webpack.optimize.UglifyJsPlugin({ minimize: true, compress: true }),    	
		new ExtractTextPlugin("css/[name].css"),
    ]
};

module.exports = config;