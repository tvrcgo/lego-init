
// 加载的插件
exports.plugin = {
  view: {
    enable: true,
    package: 'lego-render',
    ext: 'html'
  },
  static: {
    package: 'lego-static'
  },
  performance: {}
}

// 加载的agent
exports.agent = {
  livereload: {
    package: 'lego-livereload'
  },
  test: {}
}

// 加载的job
exports.job = {
  timer: {
    cron: '*/2 * * * * *'
  }
}
