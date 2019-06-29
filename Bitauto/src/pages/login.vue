<template>
  <div>
    账号: <input type="text" v-model="login.user"><br>
    密码: <input type="password" v-model="login.password"><br>
    <button @click="register">注册</button>
  </div>
</template>

<script>
import Qs from 'qs'
export default {
  name:'login',
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
      console.log('注册')
      this.$http.post('http://localhost:1234/user', Qs.stringify(this.login))
      .then(function (response) {
        console.log(response,'成功');
      })
      .catch(function (error) {
        console.log(error,'失败');
      });
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>

