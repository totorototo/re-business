const path = require('path');

module.exports = {
    entry: {
        index: './lib/es6/src/index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        library: "re-business",
        libraryTarget: "umd"
    }
};