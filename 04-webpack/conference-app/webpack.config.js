var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module : {
        rules: [
            {test: /\.html$/, use: 'html-loader'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}