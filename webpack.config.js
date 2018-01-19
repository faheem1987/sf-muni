var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

const dependencies = [
	"react","react-dom","redux", "react-redux","redux-thunk","axios", "d3-geo"
]

module.exports = {
	entry: {
		bundle: "./src/store/index.js",
		vendors: dependencies
	}, 
	output: {
		path: path.join(__dirname, "dist"),
		filename: "[name].js"
	},
	module: {
		rules: [
			{
				use: "babel-loader",
				test: /\.js$/,
				exclude: /node_modules/
			},
			{
				use: ["style-loader", "css-loader"],
				test: /\.css$/
			}
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin("vendors"),
		new HtmlWebpackPlugin({
      template: './index.html'
		})
	]
};