const path = require('path')

module.exports = {
    entry: './src/entry.js',
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: 'dist/',
        filename: 'bundle.js',
        chunkFilename: '[name].min.js',
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style!css'
        }]
    }
}
