var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

var config = {
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/build/src'
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                issuer: {
                    include: path.resolve(__dirname, '/src/package')
                },
                use: 'babel-loader'
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin()],
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: false,
        port: 4040
    }
};

module.exports =  (env, argv) => {
    return config;
}