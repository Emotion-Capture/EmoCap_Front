const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack"); //빌트인 플러그인에 접근하기 위함
const path = require("path");

module.exports = {
  entry: "./src/App.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.[contenthash].ts",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$x/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.ts$x/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css/,
        use: "css-loader",
      },
      {
        test: /\.jpeg|jpg|png/,
        use: "file-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname),
    },
    compress: true,
    historyApiFallback: true,
    port: 3080,
  },
};
