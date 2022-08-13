const KoaRouter = require('koa-router')
const commentRouter = new KoaRouter({ prefix: '/api' })
const controller = require('../controller/comments')


commentRouter.post('/comments/add', controller.addComment)
commentRouter.get('/comments/find/:post_id', controller.postComment)
commentRouter.get('/comments/getOwnComments/:user_id', controller.userComment)

module.exports = commentRouter
