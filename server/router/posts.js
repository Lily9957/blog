const KoaRouter = require('koa-router')
const postsRouter = new KoaRouter({ prefix: '/api' })
const controller = require('../controller/post')


postsRouter.post('/posts/publish', controller.publishPost)
postsRouter.post('/posts/addpv', controller.addPreview)
postsRouter.post('/posts/delete', controller.deletePost)
postsRouter.get('/posts/all', controller.getAllPosts)
postsRouter.get('/posts/owner/:user_id', controller.ownerPosts)
postsRouter.get('/posts/category/:category', controller.categoryPosts)
postsRouter.get('/posts/draft/:user_id', controller.draftPosts)
postsRouter.get('/posts/hot', controller.getHotPosts)

module.exports = postsRouter