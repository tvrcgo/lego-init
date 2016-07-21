'use strict'

const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const ROOT = process.cwd()

module.exports = {
  entry: {
    index: path.resolve(ROOT, 'app/view/index/index.js')
  },
  output: {
    path: 'app/public/bundle',
    filename: '[name].js'
  },
  resolve: {
    root: [
      path.resolve(ROOT, 'app/view/component')
    ],
    extensions: ['', '.js', '.jsx', '.json', '.vue'],
    alias: {
      '@component': path.resolve(ROOT, 'app/view/component')
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
          path.resolve(ROOT, 'app/view')
        ],
        exclude: ['node_modules']
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ],
  },
  externals: {
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'react': 'React',
    'react-dom': 'ReactDom'
  },
  plugins: [
    new CopyWebpackPlugin([

    ])
  ]
}
