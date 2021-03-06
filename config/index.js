const path = require('path');

module.exports = {
    development: {
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsPublicPath: '/',
        assetsSubDirectory: 'static',
        contentBase: path.resolve(__dirname, '../dist'),
        port: 3000,
        prefix: '/'
    },
    production: {
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsPublicPath: '/lisk-eternity/',
        assetsSubDirectory: 'static',
        prefix: '/lisk-eternity',
        productionSourceMap: false
    }
};
