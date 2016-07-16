'use strict'

module.exports = (opts, mnt, app) => {
  // combo test
  return (ctx, next) => {
    if (/\.(js|css)$/g.test(ctx.href)) {
      // console.log('[combo] hit', ctx.href)
    }
    return next()
  }
}
