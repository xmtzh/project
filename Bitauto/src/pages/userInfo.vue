<template>
  <div>
    欢迎您 {{$store.state.username}}
    <br>
    ----------------
    <br>
    这里是您的信息界面
    <br>
    ----------------
    <br>
    <button @click="loginOut">退出登录</button>
  </div>
</template>

<script>
export default {
  name:'userInfo',
  data() {
    return {

    }
  },
  methods: {
    loginOut() {
      this.$store.dispatch('UserLogout')
      this.$messageS('已退出登录')
      setTimeout(()=>{
        this.$router.push({path:'/login'})
      },1000)
    }
  }
}
</script>

<style>

</style>
