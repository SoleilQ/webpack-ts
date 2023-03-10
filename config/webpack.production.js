// const TerserPlugin = require('terser-webpack-plugin');
const os = require('os');
const { join, resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  output: {
    path: join(__dirname, '../dist'),
    publicPath: '/',
    filename: 'scripts/[name].[contenthash:5].bundule.js',
    assetModuleFilename: 'images/[name].[hash:5][ext]',
  },
  optimization: {
    minimize: true,
    // minimizer: [
    //   new TerserPlugin({
    //     parallel: os.cpus().length - 1,
    //   }),
    // ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'react-generator',
      filename: 'index.html',
      template: resolve(__dirname, '../src/web/index-prod.html'),
    }),
  ],
};
