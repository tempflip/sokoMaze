const path = require('path');

module.exports = {
    watch : true,
    entry: './soko',
    output: {
        filename: 'allScripts.js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        minimize: false
    }
};