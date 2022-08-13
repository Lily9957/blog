const postModel = require("../../lib/mysql")
const moment = require('moment')

publishPost = async ctx => {
  const { title, content, category, user_id, auth, isdraft } = ctx.request.body
  const date = moment().format('YYYY-MM-DD')
  await postModel.writePost(title, content, category, user_id, auth, isdraft, date).then(res => {
    ctx.body = {
      code: "10401",
      msg: "发布成功"
    }
  }).catch(err => {
    ctx.body = {
      code: "10402",
      msg: "发布失败"
    }
  })
}

getAllPosts = async ctx => {
  await postModel.findAllPost().then(res => {
    ctx.body = {
      code: "10403",
      msg: "获取成功",
      data: res
    }
  }).catch(err => {
    console.log(err, "all post err")
    ctx.body = {
      code: "10404",
      msg: "获取博客失败"
    }
  })
}

ownerPosts = async ctx => {
  const { user_id } = ctx.params
  await postModel.findPostCountByName(user_id).then(res => {
    ctx.body = {
      code: "10405",
      msg: "获取个人博客成功",
      data: res
    }
  }).catch(err => {
    console.log(err, "owner post err")
    ctx.body = {
      code: "10406",
      msg: "获取个人博客失败",
    }
  })
}



categoryPosts = async ctx => {
  const { category } = ctx.params
  await postModel.findCategoryPost(category).then(res => {
    ctx.body = {
      code: "10407",
      msg: "获取分类博客成功",
      data: res
    }
  }).catch(err => {
    console.log(err, "category post err")
    ctx.body = {
      code: "10408",
      msg: "获取分类博客失败",
    }
  })
}

draftPosts = async ctx => {
  const { user_id } = ctx.params
  await postModel.findDraftPost(user_id).then(res => {
    ctx.body = {
      code: "10409",
      msg: "获取草稿成功",
      data: res
    }
  }).catch(err => {
    console.log(err, "draft post err")
    ctx.body = {
      code: "10410",
      msg: "获取草稿失败",
    }
  })
}

/**
 * 新增浏览量
 */
addPreview = async ctx => {
  const { post_id } = ctx.request.body
  await postModel.updatePreview(post_id).then(res => {
    ctx.body = {
      code: "10410",
      msg: "浏览+1",
    }
  }).catch(err => {
    console.log(err, "addPreview err")
    ctx.body = {
      code: "10411",
      msg: "浏览失败",
    }
  })
}

/**
 * hot posts
 */
getHotPosts = async ctx => {
  await postModel.getHotPosts().then(res => {
    ctx.body = {
      code: "10412",
      msg: "热门文章获取成功",
      data: res
    }
  }).catch(err => {
    console.log(err, "getHotPosts err")
    ctx.body = {
      code: "10413",
      msg: "热门文章获取失败",
    }
  })
}

/**
 * 删除文章
 */
deletePost = async ctx => {
  const { post_id } = ctx.request.body
  await postModel.deletePost(post_id).then(res => {
    ctx.body = {
      code: "10414",
      msg: "删除文章成功",
    }
  }).catch(err => {
    console.log(err, "addPreview err")
    ctx.body = {
      code: "10415",
      msg: "删除文章失败",
    }
  })
}
module.exports = {
  publishPost,
  getAllPosts,
  ownerPosts,
  categoryPosts,
  draftPosts,
  addPreview,
  getHotPosts,
  deletePost
}