<template>
  <div class="login">
    <!-- 账号: <input type="text" v-model="login.user"><br>
    密码: <input type="password" v-model="login.password"><br>
    <button @click="register">注册</button> -->
    <!-- 头部 -->
    <div class="login-header">
      <div @click="prev">
        <img src="../images/hleft.png" alt="">
      </div>
      <span class="login-header-text">登录</span>
    </div>
    <!-- logo部分 -->
    <div class="login-titlelogo">
      <img src="http://img2.bitautoimg.com/uimg/mbt2018/images/logo1809.png" alt="">
      <span class="login-title"> 一个帐号，玩转所有汽车服务！</span>
    </div>
    <!-- 登录注册导航 -->
    <div class="login-register">
      <div @click="changeLogin" :class="['menu',{'active':acriveIndex === 1 }]">
        <router-link :class="['LG',{'activeT':acriveIndex === 1 }]" to="/login">用户登录</router-link>
      </div>
      <div @click="changeRegister" :class="['menu',{'active':acriveIndex === 2 }]">
        <router-link :class="['LG',{'activeT':acriveIndex === 2 }]" to="/login/register">新用户注册</router-link>
      </div>
    </div>
    <!-- 输入框入口 -->
    <router-view></router-view>
    <!-- 底部 -->
    <div class="login-footer">
      <span>使用其他账号登录</span>
      <div class="otherLogin">
        <div class="qq loginOne">
          <img src="../images/qq.png" alt="">
          QQ登录
        </div>
        <div class="weibo loginOne">
          <img src="../images/weibo.png" alt="">
          微博登录
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Qs from 'qs'
export default {
  name:'login',
  data() {
    return {
      acriveIndex: 1
    }
  },
  methods: {
    changeLogin() {
      this.acriveIndex = 1
      console.log(this.acriveIndex)
    },
    changeRegister() {
      this.acriveIndex = 2
      console.log(this.acriveIndex)
    },
    prev(){
      this.$router.push({path:'/'})
    },
    changePath() {
      let path = this.$route.path
      if(path == '/login') {
        this.acriveIndex = 1
      }else {
        this.acriveIndex = 2
      }
    }
  },
  watch: {
    // 页面路由改变时更改acriveIndex的值
    $route(to, from) {
      console.log(this.$route.path);
      this.changePath();
    }
  },
  created() {
    // 页面路由加载时更改acriveIndex的值
    this.changePath();
  }
}
</script>

<style lang="stylus" scoped>
.active
  border-bottom 0.2rem solid #297dcc
.activeT
  color #297dcc !important
.login
  width 100vw
  height 100vh
  background: #f5f5f5;
  color: #1B1B1B;
  .login-header
    width 100%
    height 4.4rem
    padding 1rem 0.3rem
    display flex
    align-items center
    border-bottom 0.1rem solid #D9D9D9
    position relative
    img
      width 3.5rem
    .login-header-text
      font-size 1.8rem
      position absolute
      left 50%
      top 50%
      transform translate(-50%,-50%)
  .login-titlelogo
    width 100%
    padding 4rem 0 2rem 0
    display flex
    flex-direction column
    align-items center
    img
      width 8.5rem
    .login-title
      font-size 2.0rem
      font-weight bold
      margin-top 1rem
  .login-register
    width 100%
    display flex
    .menu
      width 50%
      text-align center
      font-size 1.5rem
      color #666
      padding 1rem 0
      .LG
        display inline-block
        width 100%
        height 100%
  .login-footer
    width 92%
    margin 5rem 4%
    border-top 0.1rem solid #e1e1e1
    position relative
    display flex
    bottom 0
    span
      background-color #f5f5f5
      position absolute
      left 50%
      top -1rem
      padding 0 2rem
      transform translate(-50%)
      color #999
    .otherLogin
      width 100%
      display flex
      margin-top 3rem
      justify-content space-between
      .loginOne
        width 48%
        background-color #fff
        justify-content center
        align-items center
        display -webkit-flex
        padding 0.7rem 0
        border-radius 0.5rem
        border 0.1rem solid #D4D4D4
        font-size 1.5rem
        img
          width 2.8rem
          margin-right 0.5rem





</style>

