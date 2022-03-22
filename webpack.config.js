const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'js/app.js',
    path: path.resolve('public'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  mode: 'development',
  module: {
    rules: [
      { test: /\.tsx?$/, exclude: /node_modules/, use: 'ts-loader' },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      },
      { test: /\.(svg|jpe?g|png|gif)$/, type: 'asset/resource' },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/app.css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/favicon.ico',
      base: '/',
    }),
  ],
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
  },
};
