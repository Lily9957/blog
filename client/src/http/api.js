import service from "./request"

export function signin(params) {
  console.log(params, "params")
  return service({
    url: '/user/signin',
    method: 'post',
    data: params
  })
}
export function signup(params) {
  console.log(params, "params")
  return service({
    url: '/user/signup',
    method: 'post',
    data: params
  })
}
export function getCategory() {
  return service({
    url: '/categorylist',
    method: 'get',
  })
}
/**
 * 写博客
 */
export function writeBlog(params) {
  console.log(params)
  return service({
    url: '/posts/publish',
    method: 'post',
    data: params
  })
}

/**
 * 查询所有博客
 */
export function allBlogs() {
  return service({
    url: '/posts/all',
    method: 'get',
  })
}

/**
 * 查询自己的博客
 */
export function ownerBlogs(user_id) {
  return service({
    url: `/posts/owner/${user_id}`,
    method: 'get',
  })
}
/**
 * 查询自己的草稿箱
 */
export function ownerDraft(user_id) {
  return service({
    url: `/posts/draft/${user_id}`,
    method: 'get',
  })
}

/**
 * 分类博客
 */
export function categoryBlogs(category) {
  return service({
    url: `/posts/category/${category}`,
    method: 'get',
  })
}

/**
 * 发表评论
 */
export function addComment(params) {
  console.log(params)
  return service({
    url: 'comments/add',
    method: 'post',
    data: params
  })
}
/**
 * 获取评论
 */
export function getComment(post_id) {
  return service({
    url: `comments/find/${post_id}`,
    method: 'get',
  })
}

/**
 * 获取留言
 */
export function ownComment(user_id) {
  return service({
    url: `comments/getOwnComments/${user_id}`,
    method: 'get',
  })
}

/***
 * 新增浏览量
 */
export function addPv(params) {
  return service({
    url: 'posts/addpv',
    method: 'post',
    data: params
  })
}

/**
 * 获取热门文章
 */
export function hotPosts() {
  return service({
    url: `posts/hot`,
    method: 'get',
  })
}

/**
 * 删除
 */
export function deletePost(params) {
  return service({
    url: 'posts/delete',
    method: 'post',
    data: params
  })
}

/**
 * 获取回复
 */
export function getReplay(comment_id) {
  return service({
    url: `replay/getreplay/${comment_id}`,
    method: 'get',
  })
}

/**
 * 发布回复
 */
export function addReplay(params) {
  return service({
    url: 'replay/add',
    method: 'post',
    data: params
  })
}

/**
 * 新增分类
 */
export function addCatrgory(params) {
  return service({
    url: 'addCategory',
    method: 'post',
    data: params
  })
}