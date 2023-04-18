const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const srcPath = path.resolve(__dirname, './src/');
const buildPath = path.resolve(__dirname, './build/');
const staticPath = path.resolve(__dirname, './static/');

module.exports = {
    entry: path.resolve(srcPath, 'index.ts'),
    output: {
        filename: 'index_bundle.js',
        path: staticPath,
        // clean: true,
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(handlebars|hbs)$/,
                use: 'handlebars-loader',
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.hbs'],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: path.resolve(buildPath, 'index.html'),
            publicPath: '/static/',
        }),
        new MiniCssExtractPlugin({ filename: "[name].css" }),
    ],

    devtool: 'inline-source-map',
    devServer: {
        static: buildPath,
        hot: true,
    },
};