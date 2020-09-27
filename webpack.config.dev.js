const path = require("path");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config.common");

const devConfig = {
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  devtool: "eval-cheap-source-map",
  devServer: {
    port: 9000,
    contentBase: path.resolve(__dirname, "dist"),
    compress: true,
    stats: "errors-only",
  },
};

module.exports = merge(commonConfig, devConfig);
