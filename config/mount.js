
// 加载的插件
exports.plugin = {
  combo: {
    enable: true,
    path: 'lego-combo'
  },
  view: {
    enable: true,
    package: 'lego-render',
    options: {
      ext: 'html'
    }
  },
  static: true
}

// 加载的中间件及配置
exports.middleware = {
  performance: {}
}

// 加载的agent
exports.agent = {
  livereload: {
    package: 'lego-livereload'
  }
}

// 加载的job
exports.job = {
  timer: {
    cron: '*/2 * * * * *'
  }
}
