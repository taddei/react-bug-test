module.exports = {
  cwd: './lib',
  output: {
    filename     : "[name].js",
    path         : "./public/scripts",
    publicPath   : "/scripts"
  },
  entry  : {
    main: "./lib/main.js"
  },
  module : {
    loaders: [
      {
        test  : /\.jsx$/,
        loader: 'jsx-loader'
      }
    ]
  }
};