const userModel = require('../../lib/mysql')


// find = async ctx => {
//   const { username } = ctx.request.body
//   await userModel.findUser(username).then(result => {
//     ctx.body = {
//       code: "10204",
//       msg: '用户已注册'
//     }
//   })
// }

signup = async ctx => {
  const { username, password } = ctx.request.body
  const userResult = await userModel.findUser(username)
  if (userResult.length) {
    ctx.body = {
      code: '10204',
      msg: '用户已存在'
    }
    return
  }
  await userModel.register(username, password).then(res => {
    ctx.body = {
      code: '10205',
      msg: '注册成功'
    }
  }).catch(err => {
    console.log(err)
    ctx.body = {
      code: '10206',
      msg: '注册失败'
    }
  })
}

signin = async ctx => {
  const { username, password } = ctx.request.body
  console.log(username, password)
  const userResult = await userModel.findUser(username)
  await userModel.findUserData(username, password).then(res => {
    if (res.length) {
      ctx.body = {
        code: '10200',
        msg: '登录成功',
        data: res
      }
    } else if (userResult.length) {
      ctx.body = {
        code: '10201',
        msg: '密码错误'
      }
    } else if (!userResult.length) {
      ctx.body = {
        code: '10202',
        msg: '该用户未注册'
      }
    }
  }).catch(err => {
    console.log(err)
  })
}

module.exports = {
  // find,
  signup,
  signin
}