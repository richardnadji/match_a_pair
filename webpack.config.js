var webpack = require('webpack')

module.exports = {
  entry: './index.js',

  output: {
    // path: 'build',
    filename: 'bundle.js'
  },

  // devServer: {
  //   inline: true,
  //   contentBase: './build',
  //   port: 3000
  // },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader', 'babel-loader']
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}
