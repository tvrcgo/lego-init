'use strict'

const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'app/view/main.js')
  },
  output: {
    path: '.build',
    filename: '/app/public/[name].js'
  },
  resolve: {
    root: [
      path.resolve(__dirname, 'app/view/component')
    ],
    extensions: ['', '.js', '.jsx', '.json'],
    alias: {
      '@com': path.resolve(__dirname, 'app/view/component')
    }
  },
  module: {
    noParse: [],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0', 'react']
        },
        include: [
          path.resolve(__dirname, 'app/view')
        ],
        exclude: ['node_modules']
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ],
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDom'
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: {
          glob: 'app/**/*',
          dot: false
        },
        ignore: 'app/view/**/*'
      },
      {
        from: 'app/view/**/*.html'
      },
      {
        from: 'app/view/lib',
        to: 'app/public/lib',
      },
      { from: 'config/**/*' },
      { from: '*.json' },
      { from: 'Procfile' }
    ])
  ]
}
