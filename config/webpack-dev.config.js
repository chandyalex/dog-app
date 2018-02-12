
module.exports = {

  entry: './src/main.jsx',
  output: {
    filename: './bundle.js'
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  devServer: {
    port: 8080,
    open: false,
    hot: true,
    quiet: true,
    overlay: true,
    clientLogLevel: 'none',
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: [/\.css$/, /\.scss$/],
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/
      }
    ]
  }

}