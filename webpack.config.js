var path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        monsterWorld:
        [
            'webpack-dev-server/client?http://localhost:8080',
            './scripts/app.js',
        ]
    },
    output: {
        path: __dirname,
        filename: 'public/bundle.js'

    },
    devtool: 'source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
               warnings: false
            }
        })
    ],
    devServer: {
        contentBase: './',
        inline: true,
        hot: true,
        progress: true,
        colors: true,
        quiet: true
    },
    eslint: {
        configFile: './.eslintrc',
        emitError: true,
        emitWarning: true
    },
    module: {
        preloaders: [
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                path: __dirname,
                filename: './scripts',
                exclude: /node_modules/,
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};