const Koa = require('koa');
const app = new Koa()
const koaStatic = require('koa-static');
const path = require('path');
const router = require('koa-router')();
const db = require('./models') // 引入models/index.js下的所有关系
// 有这个,才可以拿到传过来的post数据
const bodyParser = require('koa-bodyparser')

app.use(bodyParser())
app.use(async (ctx, next) => {
  // 允许哪个域名请求
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080');
  await next()
})

router.post('/user',async(ctx,next)=>{
  console.log('----------开始------------')
  // console.log(ctx.request.body.user)
  // console.log(ctx.request.body.password)
  // let obj = ctx.request.body;
  // console.log('----------结束------------')
  // ctx.body = { code: "接受到了" }
  // 引入后就可以使用sequelize的API来操作数据库了
  // select * from userlist where username = '123'
  let usernameOnly = await db.Userlist.findOne({
    where: {
      username: ctx.request.body.user,
      password: ctx.request.body.password
    }
  })
  if(usernameOnly) {
    ctx.body = { info: "注册失败,该用户已存在" }
  }else {
    await db.Userlist.create({
      username: ctx.request.body.user,
      password: ctx.request.body.password,
    })
    ctx.body = { info: "注册成功了" }
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
})


app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(1234, () => {
  console.log('server is running 1234');
});