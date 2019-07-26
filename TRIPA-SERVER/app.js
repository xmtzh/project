// 引入资源文件
var express = require('express');
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan')

// 引入index.js 路由配置文件
var indexRouter = require('./routes/index.js')
// 引入user.js路由配置文件
var userRouter = require('./routes/user.js')

var app = express() // 用express 创建一个app应用
