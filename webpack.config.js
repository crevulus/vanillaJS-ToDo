module.exports = {
  entry: {
    todo: './src/js/todo.js',
  },
  devServer: {
    contentBase: './src',
  },

  // Adding the following plugins and rules messed up my app:
  // Below are the corresponding package.json rules:

  // plugins: [new HtmlWebpackPlugin({template: './src/index.html'})],
  // module: {
  //   rules: [
  //     {
  //       // css not compiling...
  //       test: /\.css$/i,
  //       use: [
  //         'style-loader',
  //         'css-loader',
  //         'postcss-loader'
  //       ],
  //     },
  //     {
  //       test: /\.m?js$/,
  //       exclude: /node_modules/,
  //       use: {
  //         loader: 'babel-loader',
  //         options: {
  //           presets: ['@babel/preset-env']
  //         }
  //       }
  //     }
  //   ],
  // }

  // "@babel/core": "^7.9.0",
  // "@babel/preset-env": "^7.9.0",
  // "babel": "^6.23.0",
  // "babel-loader": "^8.1.0",
  // "babel-preset-env": "^1.7.0",
  // "css-loader": "^3.4.2",


  // "html-webpack-plugin": "^4.0.4",
  // "postcss-loader": "^3.0.0",
  // "style-loader": "^1.1.3",
  // "webpack": "^4.41.2",
  // "webpack-cli": "^3.3.10",
  // "webpack-dev-server": "^3.9.0"

};
