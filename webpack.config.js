const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");

const config = {
  entry: "./src",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[hash]bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
          use: "css-loader",
          fallback: "style-loader" // for lazy loaded bundled
        })
      }
    ]
  },
  plugins: [
    new ExtractTextWebpackPlugin("style.css"),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  devtool: "source-map"
};

module.exports = config;