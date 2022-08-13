const dotenv = require('dotenv')

dotenv.config()

const config = {
  //端口号
  port: process.env.APP_PORT,
  //数据库配置
  database: {
    HOST: 'localhost',
    USERNAME: 'root',
    PASSWORD: '123123',
    DATABASE: 'blog'
  }

}

module.exports = {config}