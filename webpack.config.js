const webpack = require('webpack');
const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: './src/main.js',

    output: {
        path: path.resolve(__dirname, 'public', 'build'),
        publicPath: '/build/',
        filename: 'bundle.js'
    },

    watch: NODE_ENV === 'development',
    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: NODE_ENV === 'development' && 'cheap-inline-module-source-map',
    module: {
        loaders: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['react-hot-loader', 'babel-loader']
            }, {
                test: /\.css/,
                loader: 'style-loader!css-loader!autoprefixer-loader?browsers=last 2 versions!stylus-loader?resolve url&linenos',
                exclude: /node_modules/
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(NODE_ENV)
            }
        })
    ]
};
