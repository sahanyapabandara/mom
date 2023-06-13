"use strict"
const path = require("path")
const config = require("../build/config.js")
const { VueLoaderPlugin } = require("vue-loader")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  mode: config.prod.env,
  context: path.resolve(__dirname, "../"),
  resolve: config.resolve,
  module: config.module,
  plugins: [new VueLoaderPlugin(), new MiniCssExtractPlugin()],
}
