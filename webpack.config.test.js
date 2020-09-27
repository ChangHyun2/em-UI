const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");

const testConfig = {
  entry: path.resolve(__dirname, "src/test/index.js"),
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: true,
    }),
    new htmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "src/index.html"),
      cache: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /[\\/]node_modules[\\/]/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "test"),
  },
  mode: "development",
  devtool: "eval-cheap-source-map",
  devServer: {
    port: 8000,
    contentBase: path.resolve(__dirname, "test"),
    compress: true,
    stats: "errors-only",
  },
};

module.exports = testConfig;
