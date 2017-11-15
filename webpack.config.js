const path = require('path');

module.exports = {
    entry: {
        index: './lib/es6/src/Index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        library: "reBusiness"
    }
};