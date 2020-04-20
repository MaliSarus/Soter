const WebpackMd5Hash = require('webpack-md5-hash');
const miniCss = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    /*...*/
    entry: __dirname + '/src/assets/js/script.js',
    /*...*/
    output: {
        path: __dirname + "/dist/",
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: ["/node_modules/"],
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"],
                        },
                    },
                ],
            },
            {
                test:/\.(s*)css$/,

                use: [{loader: miniCss.loader},
                    {loader:'css-loader'},
                    // {loader: 'resolve-url-loader'},
                    {loader:'sass-loader'},
                ]
            },
            { test: /\.(png|jpg|svg)$/,  use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            outputPath: 'images',
                        },
                    },
                ]
            },
            { test: /\.(woff|woff2|eot|ttf)$/,  use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            outputPath: 'fonts',
                        },
                    },
                ]
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new miniCss({
            filename: 'style.css',
        }),
        new WebpackMd5Hash(),
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            // ./public directory is being served
            host: 'localhost',
            port: 3000,
            proxy: 'soter'
        }),
    ],
    devServer: {
        contentBase: './',
        historyApiFallback: true,
        noInfo: true,
        overlay: true,
    },
    devtool: '#eval-source-map'
};