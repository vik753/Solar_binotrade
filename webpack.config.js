// Webpack v4
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/js/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[chunkhash:4].[name].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(eot|woff|ttf|svg)$/,
        exclude: /(node_modules|images)/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name]-[hash:4].[ext]'
                }
            }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'img/[name]-[hash:4].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './[name].styles.min.css',
       sourceMap: true
    }),
    new HtmlWebpackPlugin({
      hash: true,
      filename: 'index.html',
      template: './src/index.html',
      environment: process.env.NODE_ENV
    }),
    new WebpackMd5Hash(),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    open: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
};