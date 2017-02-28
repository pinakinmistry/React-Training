module.exports = {
    entry: './src/index.js',
    output: {
        path: '/',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 3333,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
};