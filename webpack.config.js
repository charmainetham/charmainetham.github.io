const webpack = require('webpack');
const config ={
  context: __dirname + '/src',
  entry: {
    app: './index.js',
  },
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: '/',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin() ,
    new webpack.DefinePlugin({
      'process.env': {
          'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
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
