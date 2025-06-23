const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { watchFile, writeFile } = require("fs")

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/template.html"],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],

}