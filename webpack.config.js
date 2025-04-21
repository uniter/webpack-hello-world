const UniterWebpackPlugin = require('webpack-uniter-plugin').default;

module.exports = {
    context: __dirname,
    entry: './my_app',
    module: {
        rules: [
            {
                // This is the standard Babel setup to enable ES5 support.
                test: /\.js$/,
                exclude: /\bnode_modules\b/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    output: {
        path: __dirname + '/dist/',
        filename: 'my_bundle.js'
    },
    plugins: [
        // Uniter transpiles your PHP code to JavaScript,
        // so Webpack can include it in your JS bundle for you
        // and it can be run in the browser.
        new UniterWebpackPlugin()
    ]
};
