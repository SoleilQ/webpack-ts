const { resolve } = require('path');
const merge = require('webpack-merge');
const argv = require('yargs-parser')(process.argv.slice(2));
const _mode = argv.mode || 'development';
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
const _modeflag = _mode === 'production' ? true : false;
const WebpackBar = require('webpackbar');
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const webpackBaseConfig = {
  entry: {
    main: resolve('src/web/index.tsx'),
  },
  output: {
    path: resolve(process.cwd(), 'dist/web'),
  },
  cache: {
    type: 'filesystem',
    // cacheDirectory: resolve(__dirname, '.temp'),
  },
  // performance: {
  //   maxAssetSize: 250000, // 最大资源大小250KB
  //   maxEntrypointSize: 250000, // 最大入口资源大小250KB
  //   hints: 'warning', // 超出限制时只给出警告
  // },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        // exclude: /(node_modules)/,
        use: {
          loader: 'swc-loader',
        },
      },
      {
        test: /\.css$/i,
        include: resolve(__dirname, 'src'),
        use: [
          !_modeflag ? 'style-loader' : MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
        ],
      },
      {
        test: /\.less$/i,
        include: resolve(__dirname, 'src'),
        use: [
          !_modeflag ? 'style-loader' : MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 2 } },
          'less-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|jpg|svg)$/,
        type: 'asset',
      },
    ],
  },
  optimization: {
    runtimeChunk: {
      name: 'runtime',
    },
    splitChunks: {
      chunks: 'all',
      // maxInitialRequests: 3,
      // name: true,
      maxAsyncRequests: 3,
      cacheGroups: {
        vendors: {
          name: 'vendors',
          // minChunks: 1,
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        // lodash: {
        //   name: 'lodash',
        //   chunks: 'all',
        //   priority: -100,
        //   test: /[\\/]node_modules[\\/]lodash[\\/]/,
        //   enforce: true,
        // },
        common: {
          // chunks: 'all',
          name: 'common',
          minChunks: 2,
          priority: -20,
          // maxAsyncRequests: 1,
          reuseExistingChunk: true,
          // enforce: true,
        },
        // commons: {
        //   chunks: 'all',
        //   name: 'commons',
        //   minChunks: 2,
        //   priority: -20,
        //   // enforce: true,
        //   reuseExistingChunk: true,
        // },
        // common: {
        //   name: 'chunk-common',
        //   chunks: 'initial',
        //   minChunks: 2,
        //   maxInitialRequests: 5,
        //   minSize: 0,
        //   priority: 2,
        //   reuseExistingChunk: true,
        //   enforce: true,
        // },
        // vendors: {
        //   name: 'chunk-vendors',
        //   test: /[\\/]node_modules[\\/]/,
        //   chunks: 'initial',
        //   priority: 3,
        //   reuseExistingChunk: true,
        //   enforce: true,
        // },
      },
      minSize: {
        javascript: 0,
        style: 0,
      },
      // maxSize: {
      //   javascript: 500000,
      //   style: 10,
      // },
    },
  },
  resolve: {
    alias: {
      '@components': resolve('src/web/components'),
      '@layouts': resolve('src/web/layouts'),
      '@hooks': resolve('src/web/hooks'),
      '@pages': resolve('src/web/pages'),
      '@assets': resolve('src/web/assets'),
      '@store': resolve('src/web/store'),
      '@states': resolve('src/web/states'),
      '@utils': resolve('src/web/utils'),
    },
    extensions: ['.js', '.ts', '.tsx', 'jsx'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: _modeflag ? 'styles/[name].[contenthash:5].css' : 'styles/[name].css',
      chunkFilename: _modeflag ? 'styles/[name].[contenthash:5].css' : 'styles/[name].css',
      ignoreOrder: false,
    }),
    new CleanWebpackPlugin(),
    new WebpackBar(),
    new Dotenv(),
  ],
};
module.exports = merge.default(webpackBaseConfig, _mergeConfig);
