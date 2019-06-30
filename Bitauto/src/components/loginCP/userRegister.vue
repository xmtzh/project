<template>
  <div>
    <div class="userLogin">
      <div class="user">
        <img class="img" src="../../images/user.png" alt="">
        <mt-field placeholder="请创建您的用户名" v-model="login.user"></mt-field>
      </div>
      <div class="password">
        <img class="img" src="../../images/mima.png" alt="">
        <mt-field placeholder="请创建您的密码" type="password" v-model="login.password"></mt-field>
      </div>
      <div class="repassword">
        <img class="img" src="../../images/jiaoyan.png" alt="">
        <mt-field placeholder="请确认您的密码" type="password" v-model="repassword"></mt-field>
      </div>
    </div>
    <div class="promptInfo">
      注册即视为同意
      <router-link to="#">网络服务协议</router-link>和
      <router-link to="#">隐私政策</router-link>
    </div>
    <div class="registerBtn" @click="register">
      注册
    </div>
  </div>

</template>

<script>
import Qs from 'qs'
export default {
  name:'userRegister',
  repassword:"",
  data() {
    return {
      login:{
        user:'',
        password:''
      }
    }
  },
  methods: {
    register() {
      let _this = this
      console.log('注册')
      if(this.login.user === '' || this.login.password === '' || this.repassword === ''){
        this.$messageE('输入框不能为空');
      }
      else if(this.login.password != this.repassword) {
        this.$messageE('两次输入的密码不一致');
      }
      else {
        this.$http.post('http://localhost:1234/userRegister', Qs.stringify(this.login))
        .then(function (res) {
          // console.log(response,'成功');
          if(res.data.code == 0) {
            _this.$messageE(res.data.msg)
          }
          if(res.data.code == 1) {
            _this.$messageS(res.data.msg)
            _this.$router.push({path:'/login'})
          }
        })
        .catch(function (error) {
          console.log(error,'失败');
        });
      }

    },
  }
}
</script>

<style lang="stylus" scoped>
.userLogin
  width 100%
  background-color #fff
  .user , .password, .repassword
    width 96%
    display flex
    padding 1.5rem 1rem
    margin 0 2%
    border-bottom 0.1rem solid #ececec
    box-sizing border-box
    align-items center
    .mint-cell
      min-height 0
    .img
      width 2rem
      margin-right 1.5rem

.promptInfo
  padding 0.5rem 1rem
  font-size 1.2rem
  color #999
  a
    text-decoration underline
.registerBtn
  width 90%
  height 4rem
  background-color #297dcc
  margin 2rem 5% 1rem 5%
  justify-content center
  align-items center
  display -webkit-flex
  font-size 1.6rem
  border-radius 0.3rem
  color #ffffff
</style>
