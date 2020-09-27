const {merge} = require("webpack-merge");
const commonConfig = require("./webpack.config.common");

const TerserPlugin = require("terser-webpack-plugin");

const prodConfig = {
  output: { filename: "./js/[name].bundle.js" },
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(jpe?g|gif|png|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "./images/[name].[ext]?[hash]",
            limit: 8192, // in bytes
          },
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: "node_vendors",
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
        },
        common: {
          name: "components",
          test: /[\\/]src[\\/]components[\\/]/,
          chunks: "all",
        },
      },
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        extractComments: true,
      }), // https://github.com/webpack-contrib/terser-webpack-plugin
    ],
  },
};

module.exports = merge(commonConfig, prodConfig);
