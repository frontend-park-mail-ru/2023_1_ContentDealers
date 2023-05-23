const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const srcPath = path.resolve(__dirname, './src/');
const buildPath = path.resolve(__dirname, './build/');
const staticPath = path.resolve(__dirname, './static/');

module.exports = {
    mode: 'production',
    entry: {
        index: path.resolve(srcPath, 'index.ts'),
        // sw: path.resolve(srcPath, 'sw.js'),
    },
    output: {
        filename: '[name]_bundle.[contenthash].js',
        path: staticPath,
        clean: {
            keep: /img/
        }
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
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
        moduleIds: 'deterministic', // Updated option value
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: path.resolve(buildPath, 'index.html'),
            publicPath: '/static/',
            cache: false,
        }),
        new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
        new CompressionPlugin({
            algorithm: 'gzip',
            filename: '[path][base].gz',
            test: /\.(js|css|html|svg)$/,
            threshold: 10240,
            minRatio: 0.8,
            deleteOriginalAssets: false,
        }),
    ],
    devtool: 'inline-source-map',
    devServer: {
        static: buildPath,
        hot: true,
    },
};
