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
    <!-- 条件搜车tabbar -->
    <div class="search-car-tabbar">
      条件搜车
    </div>
    <!-- 轮播图 -->
    <div class="wrapper">
        <swiper :options="swiperOption" >
            <swiper-slide v-for='item of swiperList' :key="item.id">
                <img :src="item.imgUrl" class="swiper-img">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
    <!-- 四方格 -->
    <div class="tuwen">
      <router-link class="tuwen-one" to="#" v-for="(item,index) in tuwenInfo" :key="index">
        <img :src="item.img" alt="">
        <div class="tuwen-text">
          <span class="tuwen-text-title">{{item.title}}</span>
          <span class="tuwen-text-desc">{{item.desc}}</span>
        </div>
      </router-link>
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
      searchName:'',
      carTabbar:[
        {
          name:'按品牌'
        },
        {
          name:'按条件'
        },
        {
          name:'热门车'
        },
        {
          name:'新能源'
        },
        {
          name:'二手车'
        }
      ],
      // 轮播设置
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 2000,
        speed:1000
      },
      // 轮播图片
      swiperList:[
        {
          id:"0001",
          imgUrl:"https://dd.yiche.com/inner-dsp-public/c4df1169251a447b3d6bfea7c9634812.jpg"
        },
        {
          id:"0002",
          imgUrl:"http://img1.bitautoimg.com/bitauto/2019/06/19/cbfd947d-6732-4a98-822a-32552463c249.jpg"
        },
        {
          id:"0003",
          imgUrl:"http://img1.bitautoimg.com/bitauto/2019/06/19/14e80b31-fef8-4efc-8652-48ff7c978073.jpg"
        },
        {
          id:"0004",
          imgUrl:"http://image.bitautoimg.com/bitauto/2019/06/17/e1a61ff0-4cfd-4a06-9a24-da5a6f0393ee.jpg"
        },
        {
          id:"0005",
          imgUrl:"https://dd.yiche.com/inner-dsp-public/cc88b1d209e18e321bc437aec5e3a77d.jpg"
        },
        {
          id:"0006",
          imgUrl:"https://dd.yiche.com/inner-dsp-public/48e53e2acfc1be2a778b35664590869d.jpg"
        },
        {
          id:"0007",
          imgUrl:"https://dd.yiche.com/inner-dsp-public/8188ce238868ad65289b455fb34b9ea4.jpg"
        },
      ],
      // 四方个格图文数据1
      tuwenInfo:[
        {
          img:'http://img2.bitautoimg.com/bitauto/2018/02/06/92e801c6-e564-4f97-8446-9d6f2bac760a.jpg',
          title:'一成首付',
          desc:'新车开走吧'
        },
        {
          img:'http://img2.bitautoimg.com/bitauto/2017/06/29/96a5da43-e5df-4969-9052-1b10693dc542.jpg',
          title:'帮你买车',
          desc:'低价买车不吃亏'
        },
        {
          img:'http://image.bitautoimg.com/bitauto/2018/02/06/994612f9-a8d6-45bb-85c4-89ba6e28f19a.jpg',
          title:'新能源',
          desc:'挑款合适电动车'
        },
        {
          img:'http://img2.baa.bitautotech.com/usergroup/editor_pic/2018/5/25/8fa7777edbf44dd98144df072e9a7fad.jpg',
          title:'买车神器',
          desc:'真实价格发票为证'
        }
      ],

    }
  },
  components:{

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
.search-car-tabbar
  padding 0 2rem
  height 10rem
  width 100%
  box-sizing border-box
  background-color #3677E0
.wrapper >>> .swiper-pagination-bullet-active
  background red
  width 0.5rem
  height 0.5rem
.wrapper >>> .swiper-pagination-bullet
  width 0.5rem
  height 0.5rem
.wrapper
    overflow: hidden
    width: 100%
    background: #ccc
    .swiper-img
      width: 100%
.tuwen
  padding 0 2rem
  width 100%
  height 10rem
  box-sizing border-box
  .tuwen-one
    position relative
    width 50%
    display block
    float left
    border-bottom 0.1rem solid #f5f7fb
    box-sizing border-box
    &:nth-child(odd)
      border-right 0.1rem solid #f5f7fb
    img
      width 100%
      z-index 1
      display block
    .tuwen-text
      position absolute
      top 2rem
      left 1rem
      color #999
      font-size 1.2rem
      .tuwen-text-title
        display block
        color #000
        font-weight bolder
        font-size 1.6rem




</style>

