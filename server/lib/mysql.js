const mysql = require('mysql')
const { config } = require('../config/default')

let pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE
})


const query = function (sql) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) {
        console.log(err)
        resolve(err)
      } else {
        connection.query(sql, (err, rows) => {
          // if (!rows) {
          //   resolve(rows)
          // } else {
          //   reject(err)
          // }
          if (err) {
            reject(err)
          } else {
            resolve(rows)
          }

          connection.release()
        })
      }
    })
  })
}

//注册用户
const register = (name, pass) => {
  console.log(name, pass)
  let sql = `insert into user set username="${name}",password="${pass}";`
  return query(sql)
}

// 用户登录
const findUserData = (name, pass) => {
  let sql = `select * from user where username="${name}" and password="${pass}";`
  console.log(sql)
  return query(sql)
}
//根据姓名查找用户
const findUser = (name) => {
  let sql = `select * from user where username="${name}"`
  return query(sql)
}

/******
 * 获取所有分类
 */
const categoryList = () => {
  let sql = `select * from category;`
  return query(sql)
}

/**
 * 文章分类
 */
const findCategoryPost = (category) => {
  let sql = `select * from post where category="${category}" and isdraft=0;`
  return query(sql)
}

// 增加文章评论数
const addPostCommentCount = (post_id) => {
  let sql = `update post set comments= comments + 1 where post_id=${post_id}`
  return query(sql)
}
// // 减少文章评论数
// const reducePostCommentCount = (value) => {
//   let sql = "update post set comments = comments - 1 where id=?"
//   return query(sql, value)
// }

// 更新浏览数
const updatePreview = (post_id) => {
  let sql = `update post set preview= preview + 1 where post_id=${post_id}`
  return query(sql)
}

// 发表评论
const insertComment = (user_name, com_content, moment, post_id) => {
  let sql = `insert into comment (user_name,com_content,moment,post_id) values("${user_name}","${com_content}","${moment}","${post_id}")`
  return query(sql)
}

//获取评论
const findPostComment = (post_id) => {
  let sql = `select * from comment where post_id=${post_id};`
  return query(sql)
}

//获取个人所有评论(留言)
const findUserComment = (user_id) => {
  let sql = `select title,user_name,com_content,moment FROM comment,post WHERE comment.post_id = post.post_id AND user_id = ${user_id}`
  return query(sql)
}
// 查询所有文章
const findAllPost = () => {
  let sql = `select * from post where isdraft=0;`
  return query(sql)
}
//写文章
const writePost = (title, content, category, user_id, auth, isdraft, publish_time) => {
  let sql = `insert into post (title, content, category,user_id,auth,isdraft,publish_time) values ("${title}","${content}","${category}",${user_id},"${auth}",${isdraft},"${publish_time}");`
  console.log(sql, "write")
  return query(sql)
}

// 查询所有个人用户文章
const findPostCountByName = (user_id) => {
  let sql = `select * from post where user_id="${user_id}" and isdraft=0;`
  return query(sql)
}
// 查询个人草稿文章
const findDraftPost = (user_id) => {
  let sql = `select * from post where user_id=${user_id}  and isdraft=1;`
  return query(sql)
}

// 更新修改文章
// const updatePost = (values) => {
//   let sql = `update post set title=?,content=?,md=? where id=?`
//   return query(sql,values)
// }
// 删除文章
const deletePost = (post_id) => {
  let sql = `delete from post where post_id = ${post_id}`
  return query(sql)
}
// 删除评论
// const deleteComment = (comment_id) => {
//   let sql = `delete from comment where comment_id=${comment_id}`
//   return query(sql)
// }

//回复
const insertReplay = (comment_id, from_user, to_user, re_content, time) => {
  let sql = `insert into replay (comment_id,from_user,to_user,re_content,time) values("${comment_id}","${from_user}","${to_user}","${re_content}","${time}")`
  return query(sql)
}
//根据评论id获取回复
const getReplay = (comment_id) => {
  let sql = `select * from replay where comment_id=${comment_id};`
  return query(sql)
}

//获取热门文章
const getHotPosts = () => {
  let sql = "SELECT title FROM post where isdraft=0 ORDER BY preview DESC LIMIT 6 "
  return query(sql)
}

//新增分类
const addCategory = (category_name) => {
  // let sql = `insert into category set category_name="${category_name}";`
  let sql = `insert into category (category_name) values("${category_name}")`
  console.log(sql, "add")
  return query(sql)
}

module.exports = {
  register,
  findUser,
  findUserData,
  addPostCommentCount,
  // reducePostCommentCount,
  updatePreview,
  insertComment,
  findPostComment,
  findUserComment,
  findAllPost,
  findPostCountByName,
  findCategoryPost,
  findDraftPost,
  deletePost,
  // deleteComment,
  categoryList,
  writePost,
  insertReplay,
  getReplay,
  getHotPosts,
  addCategory
}