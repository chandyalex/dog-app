
module.exports = {

  entry: './src/main.jsx',
  output: {
    filename: './docs/app-bundle.min.js'
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
        loader: 'babel-loader',
        query: {
          babelrc: false,
          presets: ["es2015", "react"]
        },
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