## Sequelize 笔记
安装sequelize模块

新建models文件夹  
在models文件夹下新建 db.js

db.js 用来建立数据库连接
```js
const Sequelize = require('sequelize')
// 统一配置放在了conifg目录下
module.exports = new Sequelize('数据库名', '账号', '密码，没有则填null', {
  host: 'localhost', // 数据库地址
  dialect: 'mysql', // 指定连接的数据库类型
  pool: {
    max: 50, // 连接池中最大连接数量
    min: 0, // 连接池中最小连接数量
    idle: 10000 // 如果一个线程 10 秒钟内没有被使用过的话，那么就释放线程
  }
})
```

在models目录下新建user目录，在user目录下新建userlist.js来创建与数据库的关系，这里新建一个目录只是为了方便理解结构。
```js
const Sequelize = require('sequelize')
const sequelize = require('../db')
const { STRING, INTEGER, DATE, NOW } = Sequelize
// 第一个参数为表名，后面为表的属性
const Userlist = sequelize.define('userlist', {
  id: {
    type: INTEGER(255),
    primaryKey: true,
    autoIncrement: true
  },
  username: { type: STRING(50) },
  password: { type: STRING(255) }
  created_at: { type: DATE, defaultValue: NOW },
  updated_at: { type: DATE, defaultValue: NOW }
}, {
    freezeTableName: true ,// 不自动将表名添加复数
    createdAt: 'created_at',
    // 将updatedAt对应到数据库的updated_at字段，数据库不分大小写，所有不支持驼峰式命名
    updatedAt: 'updated_at',
    deletedAt: false, //'deleted_at',
    //删除数据时不删除数据，而是更新deleteAt字段 如果需要设置为true，则上面的deleteAt字段不能为false，也就是说必须启用
    paranoid: false
  });
// 创建userlist表，如果有这个表就没有变化
Userlist.sync();

module.exports = Userlist // 导出这个关系
```

在models目录下新建index.js 用来整合所有关系
```js
// 在这里整合所有关系，一目了然
const Userlist = require('./user/userlist')
// ...

module.exports = {
  Userlist,
  // ...
}
```

接下来就可以对Userlist进行操作了
```js
// koa 服务下
const db = require('../models') // 引入models/index.js下的所有关系

// 引入后就可以使用sequelize的API来操作数据库了
// select * from userlist where username = '123'
let usernameOnly = await db.Userlist.findOne({
    where: {
      username: '123'
    }
  })
```