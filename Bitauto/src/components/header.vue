<template>
  <div>
    <div class="header">
      <!-- 返回上一级 -->
      <div class="left" @click="prev">
        <img src="../images/left.png" alt="">
      </div>
      <!-- 易车. -->
      <div class="title">
        <span>易车</span>
        <span>·</span>
        <span class="titleName">{{title}}</span>
      </div>
      <!-- 搜索 -->
      <router-link to="" class="search">
        <img src="../images/searchBtn.png" alt="">
      </router-link>
      <!-- 导航 -->
      <div :class="['navigation',{'bg1':isShow===true}]" @click="allPage">
        <span>导航</span>
        <i :class="isShow?'i2':'i1'"></i>
      </div>
      <div class="menu" v-if="isShow">
        <div class="menu-top">
          <router-link class="img" to="/">首页</router-link>
          <router-link class="loginBtn" to="/userInfo">
            <span v-if="$store.state.username">{{$store.state.username}}</span>
            <span v-else>请登录</span>
            <img class="userImg" src="http://image.bitautoimg.com/uimg/mbt2016/images/ico_header_logout.png" alt="">
          </router-link>
        </div>
        <div class="menu-nav">
          <ul>
            <li v-for="(item,index) in menuNavName" :key="index">{{item.pageName}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bg" v-if="isShow"></div>
  </div>

</template>

<script>
export default {
  name:'header',
  props:['title'],
  data() {
    return {
      isShow: false,
      menuNavName:[
        {"pageName":"首页","url":"#"},
        {"pageName":"易车号","url":"#"},
        {"pageName":"选车","url":"#"},
        {"pageName":"报价","url":"#"},
        {"pageName":"经销商","url":"#"},
        {"pageName":"文章","url":"#"},
        {"pageName":"视频","url":"#"},
        {"pageName":"社区","url":"#"},
        {"pageName":"点评","url":"#"},
        {"pageName":"裸车价","url":"#"},
        {"pageName":"二手车","url":"#"},
        {"pageName":"一成首付","url":"#"}
      ]
    }

  },
  methods: {
    allPage() {
      this.isShow = !this.isShow
    },
    prev(){
      this.$router.go(-1)
    }

  }
}
</script>

<style lang="stylus" scoped>
.header
  margin 0
  padding 0
  height 4.4rem
  width 100%
  background-color #3677E0
  justify-content center
  position relative
  z-index 10002
  .left
    width 8%
    height 100%
    margin-left 2%
    position relative
    display inline-block
    img
      width 100%
      position absolute
      top 50%
      transform translateY(-50%)
  .title
    width 60%
    height 100%
    display inline-block
    position absolute
    top 0
    padding-left 2rem
    span
      height 100%
      color #ffffff
      display inline-block
      justify-content center
      font-weight bolder
      font-size 1.6rem
      line-height 4.4rem
    .titleName
      font-weight normal
      font-size 1.7rem
  .search
    width 14%
    height 60%
    border-radius 1.5rem
    background-color rgba(0,0,0,.1)
    display inline-block
    position absolute
    top 50%
    transform translateY(-50%)
    left 70%
    margin-right 1%
    img
      height 60%
      position absolute
      top 50%
      transform translateY(-50%)
      left 1rem
  .navigation
    display inline-block
    position absolute
    right 0
    width 15%
    height 100%
    font-size 1.6rem
    color #ffffff
    line-height 4.4rem
    text-align center
    .i1
      width 0
      height 0
      position absolute
      right 0.5rem
      bottom 0.5rem
      border-bottom 0.6rem solid #ffffff
      border-left 0.6rem solid rgba(0,0,0,0)
      border-top 0.6rem solid rgba(0,0,0,0)
    .i2
      width 0
      height 0
      position absolute
      bottom 0
      border-bottom 0.5rem solid #C9F2FE
      border-left 0.5rem solid rgba(0,0,0,0)
      border-right 0.5rem solid rgba(0,0,0,0)
      right 50%
      transform translate(50%)
  .menu
    width 29rem
    position absolute
    right 0
    top 4.4rem
    border-radius 0 0 0 .8rem
    background-color #fff
    z-index 999
    .menu-top
      width 100%
      height 7.5rem
      background url('http://image.bitautoimg.com/uimg/mbt2016/images/nav_pop_bg.jpg') no-repeat
      background-size contain
      padding 0 2rem
      position relative
      .img
        width 8.6rem
        height 3.3rem
        position absolute
        top 50%
        transform translateY(-50%)
        background url('http://image.bitautoimg.com/uimg/mbt2018/images/logo1809.png') no-repeat
        background-size contain
        text-indent -99em
      .loginBtn
        right 2rem
        position absolute
        top 50%
        transform translateY(-50%)
        align-items center
        display -webkit-flex
        font-size 1.4rem
        color #999
        .userImg
          width 4rem
          height 4rem
          border-radius 50%
          border 0.1rem solid #fff
          box-sizing border-box
          margin-left 1rem
    .menu-nav
      width 100%
      ul
        li
          width 25%
          height 4.4rem
          line-height 4.4rem
          float left
          text-align center
          font-size 1.5rem
          color #333
          border-right 0.1rem solid #ececec
          border-top 0.1rem solid #ececec
.bg
  width 100%
  height 100%
  background rgba(0,0,0,0.5)
  position fixed
  top 0
  left 0
  z-index 10001
.bg1
  background rgba(0,0,0,0.3)








</style>

