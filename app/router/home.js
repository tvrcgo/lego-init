'use strict'

exports.me = (ctx, next) => {
  ctx.render('entry/index/index', {})
}

exports.react = (ctx, next) => {
  ctx.render('entry/react/react', {})
}

exports.she = (ctx, next) => {
  ctx.body = 'chou xiao bai'
}
