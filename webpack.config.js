const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/js'),
    publicPath: '/js/'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new StyleLintPlugin({
      configFile: '.stylelintrc.json'
    })
  ],
  devServer: {
    open: true,
    port: 9000,
    contentBase: './public'
  },
  devtool: 'cheap-module-eval-source-map'
};
