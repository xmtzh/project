var express = require('express')
var fs = require('fs')  //读取文件

var router = express.Router()
// 获取首页路由
router.get('/',function(req,res,next) {
  // res.status.code = 200
  // res.setHeader('Content-Type','application/json')
  function readImage(path,res) {
    fs.readFile(path,'binary',function(err,file) {
      if(err){
        return
      }
      else {
        console.log('输出文件'),
        res.writeHead(200, {'Content-Type':'image/'})
        res.write(file,'binary')
        res.end()
      }
    })
  }
  readImage('/pubic/images/head.jpg',res)
})

export default router