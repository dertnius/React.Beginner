var path = require('path')
module.exports = {
  entry: [
    './src/index.tsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
      { 
          test: /\.tsx?$/,
                loaders: [
                    'react-hot-loader',
                    'awesome-typescript-loader'
                ],
                include: path.join(__dirname, '.')
      }
    ],
    preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx','.tsx','.ts']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
