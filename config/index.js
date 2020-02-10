const config = {
  projectName: 'taro-msparis',
  date: '2018-9-27',
  // 设计稿尺寸
  designWidth: 750,
  sourceRoot: 'src',
  outputRoot: 'dist',
  // 通用插件配置
  babel: {
    sourceMap: true,
    presets: [
      'env'
    ],
    plugins: [
      'transform-class-properties',
      'transform-decorators-legacy',
      'transform-object-rest-spread',
      ['transform-runtime', {
        "helpers": false,
        "polyfill": false,
        "regenerator": true,
        "moduleName": 'babel-runtime'
      }]
    ]
  }  ,
  uglify: {
    enable: true,
    config: {
      // 配置项同 https://github.com/mishoo/UglifyJS2#minify-options
    }
  },
  csso: {
    enable: true,
    config: {
      // 配置项同 https://github.com/css/csso#minifysource-options
    }
  },
  // 全局变量设置
  defineConstants: {},
  // 小程序端专用配置
  mini: {
    webpackChain (chain, webpack) {},
    cssLoaderOption: {},
    postcss: {
      pxtransform: {
        enable: true,
        config: {}
      },
      url: {
        enable: true,
        config: {
          limit: 10240 // 设定转换尺寸上限
        }
      }
    }
  },
  // H5 端专用配置
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    webpackChain (chain, webpack) {},
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
          browsers: [
            'last 3 versions',
            'Android >= 4.1',
            'ios >= 8'
          ]
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
