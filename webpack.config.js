const webpack = require('webpack');
const config ={
  context: __dirname + '/src',
  entry: {
    app: './index.js',
  },
  output: {
    path: __dirname+'/dist',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules:[
          	{
          	  test: /\.js$/,
          	  exclude: /node_modules/,
          	  use: 'babel-loader'
          	}	
	         ]
	}	
};
module.exports  = config;
