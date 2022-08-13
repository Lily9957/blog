const path = require('path');
module.exports = {
  devServer: {
    // 代理
    proxy: {
      '/api/v1': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api/v1': '/api'
        },
      }
    }
  },
  configureWebpack: {
    resolve: {
      // 别名
      alias: {
        '@': path.resolve(__dirname, './src'),
      }
    }
  }
};