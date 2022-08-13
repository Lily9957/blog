const KoaRouter = require('koa-router')
const categoryRouter = new KoaRouter({ prefix: '/api' })
const controller = require('../controller/category')


categoryRouter.get('/categorylist', controller.getCategory)

categoryRouter.post('/addCategory', controller.setCategory)

module.exports = categoryRouter