const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
	entry: './src/index.js',
	output: {
	filename: './dist/bundle.js'
	},
		plugins: [
 			new HtmlWebpackPlugin({
   			template: '!!pug-loader!src/index.pug',
   			xesc: 'A very long descriptions with test and bla',
   			billing: 'Billing address und blablabla',
   			posts: ["post1", "post2", "post3", "post4"]
 		}),
	]
};

