const KoaRouter = require('koa-router')
const replayRouter = new KoaRouter({ prefix: '/api' })
const controller = require('../controller/replay')



replayRouter.post('/replay/add', controller.addReplay)
replayRouter.get('/replay/getreplay/:comment_id', controller.getReplay)

module.exports = replayRouter