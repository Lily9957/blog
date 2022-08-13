const commentsModel = require('../../lib/mysql')
const moment = require('moment')


addComment = async ctx => {
  const { user_name, com_content, post_id } = ctx.request.body
  const data = moment().format('YYYY-MM-DD')
  await commentsModel.insertComment(user_name, com_content, data, post_id).then(result => {
    ctx.body = {
      code: "10501",
      msg: "评论成功"
    }
  }).catch(err => {
    console.log("addComment err", err)
    ctx.body = {
      code: "10502",
      msg: "评论失败"
    }
  })
  await commentsModel.addPostCommentCount(post_id);
}
postComment = async ctx => {
  const { post_id } = ctx.params
  await commentsModel.findPostComment(post_id).then(result => {
    // for(let i of result){}
    ctx.body = {
      code: "10503",
      msg: "获取评论成功",
      data: result
    }
  }).catch(err => {
    console.log("postComment err", err)
    ctx.body = {
      code: "10504",
      msg: "获取评论失败"
    }
  })
}

userComment = async ctx => {
  const { user_id } = ctx.params
  await commentsModel.findUserComment(user_id).then(result => {
    ctx.body = {
      code: "10505",
      msg: "获取个人评论成功",
      data: result
    }
  }).catch(err => {
    console.log("addComment err", err)
    ctx.body = {
      code: "10506",
      msg: "获取个人评论失败"
    }
  })

}

module.exports = {
  addComment,
  postComment,
  userComment
}