'use strict'

const serve = require('koa-static')
const mount = require('koa-mount')
const resolve = require('path').resolve

module.exports = (opts, mnt, app) => {
  // static server middleware
  const root = resolve(process.cwd(), 'app/public')
  return mount('/public', serve(root))
}
