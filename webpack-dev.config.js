module.exports = require('./webpack.config-helper')({
    isProduction: true,
    devtool: 'cheap-eval-source-map',
    port: 8081
});
