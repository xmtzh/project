<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <router-link to="#" class="logo">
        <img class="logoImg" src="http://image.bitautoimg.com/uimg/mbt2018/images/logo1809.png" alt="">
      </router-link>
      <router-link to="#" class="login">
        <img class="loginImg" src="http://image.bitautoimg.com/uimg/mbt2016/images/ico_header_logout.png" alt="">
      </router-link>
      <router-link to="#" class="active">
        <img src="http://image.bitautoimg.com/bitauto/2019/06/03/d3d9d316-0ec8-43cb-af51-297359aed46c_630_w0.png" alt="">
      </router-link>
    </div>
    <!-- 导航 -->
    <div class="navbar">
      <ul>
        <li v-for="(item,index) in navbar" :key="index">
          <router-link class="navText" to="#">{{item}}</router-link>
        </li>
      </ul>
      <div class="right-opc"></div>
    </div>
    <!-- 最近看过 -->
    <div class="recently-look" v-if="islook">
      最近看过:
      <ul>
        <li v-for="(item,index) in recentlyLook" :key="index">
          <router-link class="carName" to="#">{{item}}</router-link>
        </li>
      </ul>
    </div>
    <!-- 搜索栏 -->
    <div class="search">
      <input class="inputSearch" type="search" v-model="searchName" placeholder="输入您想要的车名">
      <div class="serachBtn">
        <img src="../images/searchBtn.png" alt="">
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name:'index',
  data() {
    return {
      navbar:[
        '选车',
        '易车号',
        '报价',
        '经销商',
        '裸车价',
        '新能源',
        '社区',
        '视频'
      ],
      islook:true,
      // 从缓存中读取,最多不能超过三个,多余删除
      recentlyLook:[
        '凯迪拉克XT5',
        '昂科威',
        '马自达'
      ],
      searchName:''
    }
  }
}
</script>

<style lang="stylus" scoped>


.header
  height 5rem
  background-color #fff
  .logo img
    width 8.6rem
    height 3.3rem
    float left
    margin 1rem 0 0 1rem
  .login
    width 3.2rem
    height 3.2rem
    padding 0.2rem
    margin 0.6rem 1.5rem 0 0
    border 0.1rem solid #C0D9D9
    border-radius 50%
    float right
    .loginImg
      width 100%
      border-radius 50%
  .active img
    width 10rem
    margin 0.5rem 0.5rem 0 0
    float right
.navbar
  height 4.4rem
  line-height 4.4rem
  background-color #3677E0
  overflow hidden
  overflow-x scroll
  position relative
  ul
    white-space nowrap
    li
      padding 0 1.5rem
      .navText
        color #ffffff
        font-size 1.6rem
  .right-opc
    width 2rem
    height 4.4rem
    position fixed
    background linear-gradient(to left, rgba(54,119,224,1),rgba(54,119,224,0))
    top 5rem
    right 0
.recently-look
  padding 1rem 1rem
  font-size 1.2rem
  color #666666
  ul
    display inline-block
    li
      border 1px solid rgba(0,0,0,.1)
      border-radius 5rem
      padding 0.7rem 1rem
      margin 0 0.7rem
      .carName
        color #666666
.search
  padding 0 2rem
  position relative
  .inputSearch
    display inline-block
    width 85%
    height 4rem
    border 0.1rem solid #cae3ff
    box-sizing border-box
    border-top-left-radius 5rem
    border-bottom-left-radius 5rem
    padding-left 2rem
  .serachBtn
    position absolute
    top 0
    left 85%
    transform translate(-50%)
    width 15%
    height 4rem
    background-color #3677E0
    border-top-right-radius 5rem
    border-bottom-right-radius 5rem
    padding 1rem
    box-sizing border-box
    cursor pointer
    img
      width 2rem
      position absolute
      left 50%
      transform translate(-50%)








</style>

