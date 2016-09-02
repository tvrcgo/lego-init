'use strict'

exports.me = (ctx, next) => {
  ctx.service.db.get('me')
  ctx.render('entry/index/index', {})
}

exports.react = (ctx, next) => {
  ctx.render('entry/react/react', {})
}

exports.she = (ctx, next) => {
  ctx.service.db.get('she')
  ctx.body = 'chou xiao bai'
}
