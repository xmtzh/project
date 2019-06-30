<template>
  <div>
    <el-form class="userLogin">
      <div class="user">
        <img class="img" src="../../images/user.png" alt="">
        <mt-field prop="user" placeholder="请输入您的用户名" v-model="login.user"></mt-field>
      </div>
      <div class="password">
        <img class="img" src="../../images/mima.png" alt="">
        <mt-field prop="password" placeholder="请输入您的密码" type="password" v-model="login.password"></mt-field>
      </div>
    </el-form>
    <div class="promptInfo">
      登录即视为同意
      <router-link to="#">网络服务协议</router-link>和
      <router-link to="#">隐私政策</router-link>
    </div>
    <div class="loginBtn" @click="userlogin">
      登录
    </div>
  </div>

</template>

<script>
import Qs from 'qs'
export default {
  name:'userLogin',
  data() {
    return {
      login:{
        user:'',
        password:''
      },
    }
  },
  methods: {
    userlogin() {
      console.log('登录')
      let _this = this
      if(this.login.user === '' || this.login.password === ''){
        // alert('账号或密码不能为空')
        this.$messageE('账号或密码不能为空');
      }
      else{
        // 向后台发送登录请求
        this.$http.post('http://localhost:1234/userLogin', Qs.stringify(this.login))
        .then(function (res) {
          console.log(res.data,'登录中');
          if(res.data.code == 0) {
            _this.$messageE('登录失败,账号或密码有误');
          }
          if(res.data.code == 1) {
            // 调用vuex中的登录方法,把拿到的token和登录成功的用户名存储在state中
            _this.$store.dispatch('UserLogin',{token:res.data.token,username:_this.login.user});
            console.log(_this.$store.state.token)
            _this.$messageS('登录成功,跳转中......');
            setTimeout(() => {
              _this.$router.push({path:'/'})
            }, 1000);
          }
        })
        .catch(function (error) {
          console.log(error,'失败');
        });
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.userLogin
  width 100%
  background-color #fff
  .user ,.password
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
.loginBtn
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
