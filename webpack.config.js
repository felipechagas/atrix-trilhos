const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackLoader = require('html-webpack-plugin');

module.exports = {
    entry: {
        "main": './src/js/index.js',
        "vendor": ['vue', 'vue-router', 'vue-resource', 'vue-the-mask', 'moment']
    },
    output: {
        filename: "bundle.[name].js",
        path: path.resolve(__dirname, 'www'),
	    publicPath: "../modules/addons/trilhos/www"
    },
    resolve: {
        alias: {
            "vue": path.resolve('node_modules/vue/dist/vue.js'),
            "vue-router": path.resolve('node_modules/vue-router/dist/vue-router.js'),
            "vue-resource": path.resolve('node_modules/vue-resource/dist/vue-resource.js'),
            "moment": path.resolve('node_modules/moment/moment.js'),
            "moment-locale": path.resolve('node_modules/moment/src/locale/pt-br.js'),
            "vue-datetime-picker": path.resolve('node_modules/vue-datetime-picker/dist/vue-datetime-picker.js'),
            "vue-the-mask": path.resolve('node_modules/vue-the-mask/dist/vue-the-mask.js')
        }
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.pug$/,
                loader: ['raw-loader', 'pug-html-loader']
            },
            {
                test: /\.vue$/,
                loader: ['vue-loader']
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'bundle.vendor.js'}),
        new CopyWebpackPlugin([
            {from: './src/php/trilhos.php', to: path.resolve(__dirname, 'trilhos.php')},
            {from: './src/icon/icone.png', to: path.resolve(__dirname, 'icone.png')}
        ]),
        new HtmlWebpackLoader({
            template: './src/pug/index.pug',
            filename: 'index.html',
            chunks: ['vendor', 'vue-box-test', 'main']
        }),
        new webpack.ProvidePlugin({
            Vue: ['vue/dist/vue.esm.js', 'default'],
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            $: 'jquery',
            moment: 'moment'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
}