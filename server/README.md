1、开启服务
```js
const Koa = require('koa')

const app = new Koa()

app.use((ctx, next) => {
  ctx.body = "hello word"
})

app.listen(3000, () => {
  console.log("server is running on http://localhost:3000")
})
```

2、**dotenv**加载.env文件
```js
npm i dotenv
```
新建.env文件配置端口,新建config配置文件,将process.env导出
```js
const Koa = require('koa')
const { APP_PORT } = require('./config/config.default')

const app = new Koa()

app.use((ctx, next) => {
  ctx.body = "hello word"
})

app.listen(APP_PORT, () => {
  console.log(`server is running on http://localhost:${APP_PORT}`)
})
```

3、添加路由
```js
npm i koa-router
```
步骤：1、导入包  2、实例化对象  3、编写路由  4、app.use()注册中间件

将router拆分出来，新建router文件夹，编写好路由之后，导出
```js
const KoaRouter = require('koa-router')

const userRouter = new KoaRouter({prefix: '/users'})

//自动拼接上/users
userRouter.get('/', (ctx, next) => {
  ctx.body = "user router hhh"
})

module.exports = userRouter
```
4、目录解构优化
1）拆分业务和服务,将http服务和app业务拆分，新建app文件夹，将app业务移过来并导出
```js
const Koa = require('koa')

const userRouter = require('../router/user.route')

const app = new Koa()


app.use(userRouter.routes())

module.exports = app

```

