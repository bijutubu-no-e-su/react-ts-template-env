const path = require('path');
module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/js'),
    publicPath: '/js/'
  },
  module: {
    rules:[
      {
        test: /\.js$/,
        loader:'babel-loader',
        exclude:/node_modules/
      }
    ]
  },
  devServer: {
    open: true,
    port: 9000,
    contentBase: './public'
  },
  devtool: 'cheap-module-eval-source-map'

}
