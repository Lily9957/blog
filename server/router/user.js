const KoaRouter = require('koa-router')
const userRouter = new KoaRouter({ prefix: '/api' })
const controller = require('../controller/user')


// userRouter.get('/user/getAll', controller.find)
userRouter.post('/user/signup', controller.signup)

userRouter.post('/user/signin', controller.signin)

module.exports = userRouter