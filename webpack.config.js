const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const NAME = 'innerscroller';
const WWW_PATH = path.resolve('./www');
const STYLES_PATH = path.resolve('./src', 'scss');

module.exports = {
  entry: [`${WWW_PATH}/index.js`, `${STYLES_PATH}/index.scss`],
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
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
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${NAME}.css`
    }),
    new HtmlWebPackPlugin({
      template: `${WWW_PATH}/index.html`,
      filename: './index.html'
    })
  ]
};
