const Sequelize = require('sequelize')
const sequelize = require('../db')
const { STRING, INTEGER, DATE, NOW } = Sequelize
// 第一个参数为表名，后面为表的属性
const Userlist = sequelize.define('userlist', {
  id: {
    type: INTEGER(11),
    primaryKey: true,
    autoIncrement: true
  },
  username: { type: STRING(255) },
  password: { type: STRING(255) },
  created_at: { type: DATE, defaultValue: NOW },
  updated_at: { type: DATE, defaultValue: NOW }
}, {
    freezeTableName: true,// 不自动将表名添加复数
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