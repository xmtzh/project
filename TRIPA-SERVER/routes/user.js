var express = require('express')
// var fs = require('fs')  //读取文件
var router = express.Router()
var mysql = require('mysql')

var data = {
  code:200,
  msg:'success'
}

var pool = mysql.createPool({
  host:'localhost',
  user:'root',
  password:'123456',
  database:'trip'
})

// 定义接口