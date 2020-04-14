const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 3000,
        writeToDisk: true,
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    },
    output: {
        publicPath: "/dist/",
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        libraryTarget: "system"
    },
    module: {
        rules: [
            {
                test: /\.(html|css)$/,
                loader: 'raw-loader',
                exclude: /\.async\.(html|css)$/
            },
            {
                test: /\.js$/,
                exclude: [
                    path.resolve(__dirname, "node_modules"),
                    (file) => /node_modules/.test(file),
                ],
                loader: "babel-loader",
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|ico)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ]
    },
    node: {
        fs: "empty",
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
};