<template>
  <div class="userInfo">
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
    <!-- <Footer></Footer> -->
    <!-- 回到顶部 -->
    <!-- <ScrollToTop></ScrollToTop> -->
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
    }
  },
  mounted() {
    this.isSelect = this.$route.name
  }
}
</script>

<style lang="stylus" scoped>
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
</style>

