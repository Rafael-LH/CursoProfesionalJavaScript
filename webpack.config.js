const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, './assets/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module:{
    rules:[

      {
        exclude: /(node_modules)/,
        test: /.js$/,    
        use:{
          loader: "babel-loader",
          options:{
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-transform-runtime']
          } 
        }
      }

    ]
  }
}