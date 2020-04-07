const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "development",
  entry: {
    "single-spa.config": "./single-spa.config.js",
  },
  output: {
    publicPath: "/dist/",
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // sass in vue
          "vue-style-loader",
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: [
          path.resolve(__dirname, "node_modules"),
          (file) => /node_modules/.test(file) && !/\.vue\.js/.test(file),
        ],
        loader: "babel-loader",
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  node: {
    fs: "empty",
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.js",
    },
    extensions: ["*", ".js", ".vue", ".json"],
    modules: [path.resolve(__dirname, "node_modules")],
  },
  plugins: [new CleanWebpackPlugin(), new VueLoaderPlugin()],
  devtool: "source-map",
  externals: [],
  devServer: {
    historyApiFallback: true,
  },
};
