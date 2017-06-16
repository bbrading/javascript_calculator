var webpack = require("webpack");

module.exports= {
  entry: "./calculator_display.js",
  output: {
    path: __dirname,
    filename: "bundle.js",
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  module: {
    loaders: [
      {
        test:/\.js$/,
        exclude: /node_modules/,
        loaders: []
      }
    ]
  }
};
