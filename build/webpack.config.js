'use strict'

const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const ROOT = process.cwd()

const entry = (name) => {
  return path.resolve(ROOT, 'app/view/entry/', name, 'index')
}

module.exports = {
  entry: {
    index: entry('index'),
    react: entry('react'),
  },
  output: {
    path: 'app/public/bundle',
    filename: '[name].js'
  },
  resolve: {
    root: [
      path.resolve(ROOT, 'app/view/component')
    ],
    extensions: ['', '.js', '.jsx', '.json'],
    alias: {
      '@component': path.resolve(ROOT, 'app/view/component'),
      '@lib': path.resolve(ROOT, 'app/view/lib')
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
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
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
