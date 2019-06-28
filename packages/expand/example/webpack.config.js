const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pkg = require('../package.json')

module.exports = {
	entry: './example/src/js/index.js',
  	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, './build')
  	},
  	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new CleanWebpackPlugin(['./build']),
		new HtmlWebpackPlugin({
			title: pkg.name,
			template: './example/src/index.html',
			filename: 'index.html'
		})
	],
  	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					rootMode: "upward",
				}
			}
	  	},
		  {
			test: /\.(ico)$/,
			use: {
		  		loader: 'file-loader'
			}
		}]
	}
}