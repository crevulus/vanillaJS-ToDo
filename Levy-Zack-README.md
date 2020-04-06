# Couldn't upload my linting files

You can find them in my github: https://github.com/crevulus/vanillaJS-ToDo

# Failed attempt at fixing linting error without using innerHTML:

// newTaskDiv = (id) => {
//   const styledTaskDiv = document.createElement('div');
//   styledTaskDiv.setAttribute('class', 'new-task');
//   styledTaskDiv.setAttribute('id', `div=${id}`);
//   styledTaskDiv.setAttribute('onClick', `markForRemoval(${id}`);
//   taskList.insertBefore(styledTaskDiv);
// }

// function newTaskTitle(task) {
//   const styledTaskTitle = document.createElement('h3');
//   styledTaskTitle.setAttribute('class', 'task-appended');
//   styledTaskTitle.innerHTML += task;
// }

// function newTaskDesc(desc) {
//   const styledTaskDesc = document.createElement('p');
//   styledTaskDesc.setAttribute('class', 'desc-appended');
//   styledTaskDesc.innerHTML += desc;
// }


# Adding the following plugins and rules messed up my app by adding things to localStorage twice:

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

# Below are the corresponding package.json rules:

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