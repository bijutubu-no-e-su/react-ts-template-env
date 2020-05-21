const path = require("path");
const StyleLintPlugin = require("stylelint-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public/js"),
    publicPath: "/js/"
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components"),
      containers: path.resolve(__dirname, "src/containers"),
      scss: path.resolve(__dirname, "src/scss"),
      styles: path.resolve(__dirname, "styles"),
      src: path.resolve(__dirname, "src")
    },
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new StyleLintPlugin({
      configFile: ".stylelintrc.json"
    })
  ],
  devServer: {
    open: true,
    port: 9000,
    contentBase: "./public",
    historyApiFallback:true,
  },
  devtool: "cheap-module-eval-source-map"
};
