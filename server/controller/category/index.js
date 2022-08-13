const categoryModel = require('../../lib/mysql')

getCategory = async ctx => {
  await categoryModel.categoryList().then(result => {
    ctx.body = {
      code: "10301",
      msg: "获取成功",
      data: result
    }
  }).catch(err => {
    console.log(err, "category err")
    ctx.body = {
      code: "10302",
      msg: "获取失败"
    }
  })
}

setCategory = async ctx => {
  const { category_name } = ctx.request.body
  const userResult = await categoryModel.addCategory(category_name).then(res => {
    ctx.body = {
      code: '10303',
      msg: '创建分类成功'
    }
  }).catch(err => {
    console.log(err)
    ctx.body = {
      code: '10304',
      msg: '创建分类失败'
    }
  })
}
module.exports = {
  getCategory,
  setCategory
}
// find = async ctx => {
//   const { username } = ctx.request.body
//   await userModel.findUser(username).then(result => {
//     ctx.body = {
//       code: "10204",
//       msg: '用户已注册'
//     }
//   })
// }