const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './scripts/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/' // for webpack-dev-server
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: [
                /node_modules/,
                path.resolve(__dirname, 'tests/')
                ],
                use: [{
                    loader: 'eslint-loader',
                    options: {
                        configFile: './.eslintrc',
                        emitError: false,
                        emitWarning: false
                    }
                }]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'scripts'),
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }]
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
               warnings: true
            },
            sourceMap: true
        })
    ],
    devServer: {
        // contentBase: path.resolve(__dirname, 'dist'),
        inline: true,
        hot: true,
        quiet: false
    }
};