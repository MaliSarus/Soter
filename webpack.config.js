const WebpackMd5Hash = require('webpack-md5-hash');
const miniCss = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    /*...*/
    entry: {
        script: __dirname + '/src/assets/js/script.js'
    },
    /*...*/
    output: {
        path: __dirname + "/dist/",
        filename: '[name].js',
        // publicPath: "/dist"
    },
    module: {
        rules: [
            {
                test: /\.(s*)css$/,

                use: [{loader: miniCss.loader},
                    {loader: 'css-loader'},
                    // {loader: 'resolve-url-loader'},
                    {loader: 'sass-loader'},
                ]
            },
            {
                test: /\.(png|jpg|svg)$/, use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            encoding: false,
                            outputPath: 'images',
                        },
                    },
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            outputPath: 'fonts',
                            name: '[path][name].[ext]',
                        },
                    },
                ]
            },
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
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.php",
            filename: "index.php"
        }),
        new miniCss({
            filename: 'style.css',
        }),
        new WebpackMd5Hash(),
        new BrowserSyncPlugin({
                // browse to http://localhost:3000/ during development,
                // ./public directory is being served
                host: 'localhost',
                port: 3000,
                proxy: 'soter/dist',
                files: [
                    {
                        match: ['./'],
                        fn(event, file) {
                            if (event === 'change') {
                                const bs = require('browser-sync').get('bs-webpack-plugin');
                                bs.reload();
                            }
                        },
                    },
                ],
            },
            {
                reload: false,
            }),
    ],
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        noInfo: true,
        overlay: true,
    },
    devtool: '#eval-source-map'
};