const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: './dist/bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }, ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: '!!pug-loader!src/index.pug',
            xesc: 'A very long descriptions with test and bla',
            billing: 'Billing Address',
            posts: ["post1", "post2", "post3", "post4"]
        }),
    ]
};