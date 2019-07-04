<template>
  <div class="carDesc">
    <Header :title="title" />
    <!-- 导航 -->
    <div class="navbar">
      <ul>
        <li v-for="(item,index) in navbar" :key="index" @click="changenav(item.text)">
          <router-link :class="['navText',{'navActive':navActive === item.text}]" :to="item.path">{{item.text}}</router-link>
        </li>
      </ul>
      <div class="right-opc"></div>
    </div>
    <router-view></router-view>
    <!-- 底部栏 -->
    <div class="footerBar" v-show="showFooterBar">
      <router-link to="#" v-for="(item,index) in footerBar" :key="index" class="oneBar">
        <img :src="item.img" alt="">
        <span>{{item.text}}</span>
      </router-link>
      <router-link to="#" class="floorPrice">询底价</router-link>
    </div>
    <Footer></Footer>
    <!-- 回到顶部 -->
    <ScrollToTop></ScrollToTop>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
import ScrollToTop from '@/components/scrollToTop'
export default {
  name:'userInfo',
  data() {
    return {
      title:'上汽大众T-Cross',
      navActive:"综述",
      navbar:[
        {
          text:'综述',
          path:'/carDesc'
        },
        {
          text:'报价',
          path:'/carDesc/carDescPrice'
        },
        {
          text:'参数',
          path:'/carDesc/carDescPrice'
        },
        {
          text:'图片',
          path:'/carDesc/carDescPrice'
        },
        {
          text:'裸车价',
          path:'/carDesc/carDescPrice'
        },
        {
          text:'经销商',
          path:'/carDesc/carDescPrice'
        },
        {
          text:'文章',
          path:'/carDesc/carDescPrice'
        },
        {
          text:'视频',
          path:'/carDesc/carDescPrice'
        },
        {
          text:'口碑',
          path:'/carDesc/carDescPrice'
        },
        {
          text:'油耗',
          path:'/carDesc/carDescPrice'
        },
        {
          text:'社区',
          path:'/carDesc/carDescPrice'
        },
        {
          text:'二手车',
          path:'/carDesc/carDescPrice'
        },
      ],
      showFooterBar:false ,
      footerBar:[
        {
          img:require('../images/youhui.png'),
          text:'降价提醒'
        },
        {
          img:require('../images/fenqi.png'),
          text:'分期'
        },
        {
          img:require('../images/huanxin.png'),
          text:'以旧换新'
        },
        {
          img:require('../images/xiaoshou.png'),
          text:'找销售'
        },
      ]
    }
  },
  components: {
    Header,
    Footer,
    ScrollToTop
  },
  methods: {
    changenav(text) {
      this.navActive = text
    },
    handleScroll() {
      //首先修改相对滚动位置
      this.scrollTop = window.pageYOffset || document.body.scrollTop;
      if (this.scrollTop > 400) {
        this.showFooterBar = true
      }else {
        this.showFooterBar = false
      }
    },
  },
  mounted() {
    this.isSelect = this.$route.name
    this.$nextTick(function () {
         //修改事件监听   监听到页面滚动的变化
         window.addEventListener('scroll', () => {
          this.scrollTop = document.documentElement.scrollTop ||
                            window.pageYOffset ||
                            document.body.scrollTop;
          // console.log('123456---' + this.scrollTop)
          this.handleScroll()
        },true)
    });
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  }

}
</script>

<style lang="stylus" scoped>
.carDesc
  width 100%
  background-color #f5f7fb
  .navbar
    height 4.4rem
    line-height 4.4rem
    background-color #ffffff
    overflow hidden
    overflow-x scroll
    border-bottom 0.1rem solid #f5f7fb
    ul
      white-space nowrap
      li
        padding 0 1.5rem
        .navText
          color #999999
          font-size 1.6rem
          padding-bottom 1rem
        .navActive
          color #598BDD
          font-weight bolder
          border-bottom 0.2rem solid #598BDD
    .right-opc
      width 2rem
      height 4.4rem
      position absolute
      background linear-gradient(to left, rgba(255,255,255,1),rgba(54,119,224,0))
      top 4.4rem
      right 0
  .footerBar
    width 100%
    display flex
    background-color #fff
    position fixed
    bottom 0
    z-index 100
    .oneBar
      width 17%
      display flex
      flex-direction column
      align-items center
      border-right 0.1rem solid #f5f5f5
      box-sizing border-box
      padding 1rem 0 0.5rem
      img
        width 2rem
        margin-bottom 0.3rem
    .floorPrice
      width 32%
      font-size 1.6rem
      background #F05550
      color #fff
      display flex
      align-items center
      justify-content center
</style>

