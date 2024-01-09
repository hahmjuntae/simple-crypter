const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/app.js', // 프로젝트의 진입점
  output: {
    path: path.resolve(__dirname, 'docs'), // 빌드된 파일의 경로
    filename: 'index.js', // 빌드된 파일의 이름
  },
  module: {
    rules: [
      {
        test: /\.js$/, // JavaScript 파일 처리
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/, // CSS 파일 처리
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // HTML 파일 템플릿
    }),
    new Dotenv(), // 환경 변수
  ],
};
