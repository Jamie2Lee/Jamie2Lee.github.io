const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/jamie", /* 빌드된 dist 폴더 드어갈 경로※ 사실 이게 핵심!!*/
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrgin: true,
        // pathRewrite:{
        //   '^/api':'/api'
        // }
      }
    }
  }
})
