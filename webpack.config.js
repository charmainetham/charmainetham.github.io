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
          	},
            {
              test: /\.(png|jpg|gif)$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: '[path][name].[ext]'
                  }  
                } 
              ]
            },
            {
              test: /\.css$/,
              use: [
                { loader: "style-loader" },
                { loader: "css-loader" }
              ]
            }	
	        ]
	}	
};
module.exports  = config;
