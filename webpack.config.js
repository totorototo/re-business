const path = require('path');

module.exports = {
    entry: {
        main: './lib/js/src/main.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    }
};