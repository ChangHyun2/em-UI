const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const isDevMode = process.env.NODE_ENV !== "production";

const commonConfig = {
  entry: path.resolve(__dirname, "src/index.js"),
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: isDevMode ? false : true,
    }),
    new htmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "src/index.html"),
      cache: isDevMode ? true : false,
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
};

module.exports = commonConfig;
/*
loader

url-loader vs file-loader :
url-loader : base64 인코딩 형태의 bytes 파일로 변환 > http request 최소화
It will automatically fall back to file-loader for all files beyond this size:
docs : url-loader works like file-loader, but can return a DataURL if the file is smaller than a byte limit.

CleanWebpackPlugin

```npm i --save-dev clean-webpack-plugin```

TerserPlugin

minify js
- extractComments : 주석을 js.LICENSE.txt 파일로 추출 , false로 설정 시 커멘트 무시

MiniCssExtractPlugin

```
npm i --save-dev mini-css-extract-plugin
```

webpack 버전 4부터 지원
extracts CSS into separate files. creates a CSS file per JS file which contains CSS.
webpack 버전 3 이하는 optimize-css-assets-webpack-plugin을 사용


code splitting

1. entry를 이용하는 방법

장점 : 쉽다
단점 : 두 bundle에서 중복되는 모듈이 각 번들에 모두 포함된다. dynamic하게 코드를 쪼갤 수 없다.

위 단점은 SplitChunksPlugin으로 해결 가능

entry : {
  index: './src/index.js',
  another: './src/another-module.js',
}

1) dependOn option

entry: {
  index: {import: './src/index.js', dependOn: 'shared'},
  another: {import: './src/another-module.js', dependOn: 'shared'},
  shared: 'lodash',
}

2) SplitChunksPlugin

entry:{
  index: './src/index.js',
  another: './src/another-module.js',
},
optimization:{
  splitChunks:{
    cacheGroups: {
      node_vendors:{
        test: /[\\/]node_modules[\\/]/,
        chunks: "all",
        priority: 1,
      }
    }
  }
}

2. Dynamic imports

import() calls use promises internally. If you use import() with older browsers, remember to shim Promise using a polyfill such as es6-promise or promise-polyfill.


splitChunksPlugin s관련 https://medium.com/dailyjs/webpack-4-splitchunks-plugin-d9fbbe091fd0

번들 비쥬얼라이저 https://www.npmjs.com/package/webpack-bundle-analyzer
*/
