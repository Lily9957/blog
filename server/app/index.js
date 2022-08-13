const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const userRouter = require('../router/user')
const categoryRouter = require('../router/category')
const postsRouter = require('../router/posts')
const commentRouter = require('../router/comment')
const replayRouter = require('../router/replay')

const app = new Koa()

app.use(bodyParser())
app.use(userRouter.routes())
app.use(categoryRouter.routes())
app.use(postsRouter.routes())
app.use(commentRouter.routes())
app.use(replayRouter.routes())
module.exports = app

