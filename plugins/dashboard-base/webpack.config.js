

module.exports = {
    entry: './js/main.js',
    output: {
        path: __dirname + "/dist",
        filename: 'bundle.js',
        library: ['Dashboard', 'something']
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