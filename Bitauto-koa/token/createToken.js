const jwt = require('jsonwebtoken');
const serect = 'zhanhuang'  // 密钥
module.exports = (userinfo) => { //创建token并导出
  const token = jwt.sign({
    username: userinfo.username,
    id: userinfo.id
  }, serect, { expiresIn: '1h' });
  return token;
};