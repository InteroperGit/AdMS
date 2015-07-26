/**
 * Created by mmatveev on 30.06.15.
 */

var path = require("path"),
    webpack = require("webpack");

module.exports = [{
    context: path.join(__dirname, "public", "javascripts", "client"),
    entry: "app/app",
    output: {
        path: path.join(__dirname, "public", "javascripts", "client"),
        filename: "bundle.js"
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            { test: /\.jsx$/, loader: "jsx-loader?harmony"}
        ]
    },
    resolve: {
        // You can now require('file') instead of require('file.coffee')
        extensions: ["", ".js", ".jsx"],
        root: [path.join(__dirname, "public", "javascripts", "client")],
        modulesDirectories: ["node_modules"]
    }
}];
