const Koa = require('koa');
const app = new Koa()
const koaStatic = require('koa-static');
const path = require('path');
const router = require('koa-router')();
const db = require('./models') // 引入models/index.js下的所有关系
// 有这个,才可以拿到传过来的post数据
const bodyParser = require('koa-bodyparser') //处理post请求，并把koa2上下文的表单数据解析到ctx.request.body中
const createToken = require('./token/createToken')

app.use(bodyParser())
app.use(async (ctx, next) => {
  // 允许哪个域名请求
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080');
  await next()
})

router.post('/userRegister',async(ctx,next)=>{
  console.log('----------开始注册------------')
  let usernameOnly = await db.Userlist.findOne({
    where: {
      username: ctx.request.body.user
    }
  })
  if(usernameOnly) {
    ctx.body = { msg: "注册失败,该用户名已存在", code: 0, status: 400}
  }else {
    await db.Userlist.create({
      username: ctx.request.body.user,
      password: ctx.request.body.password,
    })
    ctx.body = { msg: "注册成功", code: 1, status: 200}
  }
  // let usernameOnly1 = await db.Userlist.findAll()
  // let every = usernameOnly1.map((user) => {
  //   return {
  //    "id": user.dataValues.id,
  //    "name": user.dataValues.username
  //   }
  // })
  // console.log(usernameOnly1[0].dataValues)
  // console.log('----------分隔------------')
  // console.log(every)
  console.log('----------结束------------')
  next()
});
// 登录
router.post('/userLogin', async (ctx, next) => {
  console.log('----------开始登录------------')
  let user = await db.Userlist.findOne({
    where: {
      username: ctx.request.body.user,
      password: ctx.request.body.password
    }
  })
  if (user) {
    console.log(user)
    let token = createToken({ username: user.dataValues.username, id: user.dataValues.id})
    ctx.body = { msg: "登录成功",token,code: 1,status:200}
    console.log('存在')
  } else {
    ctx.body = { msg: "登录失败,用户不存在", code: 0, status: 400 }
    console.log('不存在')
  }
  console.log('----------结束登录------------')
  next()
})


app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(1234, () => {
  console.log('server is running 1234');
});