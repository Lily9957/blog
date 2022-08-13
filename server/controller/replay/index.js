const replayModel = require('../../lib/mysql')
const moment = require('moment')


addReplay = async ctx => {
  const { comment_id, from, to, re_content } = ctx.request.body
  const data = moment().format('YYYY-MM-DD')
  await replayModel.insertReplay(comment_id, from, to, re_content, data).then(result => {
    ctx.body = {
      code: "10601",
      msg: "回复成功"
    }
  }).catch(err => {
    console.log("addComment err", err)
    ctx.body = {
      code: "10602",
      msg: "回复失败"
    }
  })
}

getReplay = async ctx => {
  const { comment_id } = ctx.params
  await replayModel.getReplay(comment_id).then(result => {
    ctx.body = {
      code: "10603",
      msg: "获取回复成功",
      data: result
    }
  }).catch(err => {
    console.log("addComment err", err)
    ctx.body = {
      code: "10604",
      msg: "获取回复失败"
    }
  })
}

module.exports = {
  addReplay,
  getReplay
}