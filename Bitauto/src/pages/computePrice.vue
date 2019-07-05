<template>
  <div class="computePrice">
    <!-- 头部 -->
    <Header :title="title"></Header>
    <!-- 导航 -->
    <div class="navbar">
      <ul>
        <li v-for="(item,index) in navbar" :key="index" @click="changenav(item.text)">
          <router-link :class="['navText',{'navActive':navActive === item.text}]" :to="item.path">{{item.text}}</router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
    <!-- 尾部 -->
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
  name:'computePrice',
  data() {
    return {
      nakedPrice:0,
      title:'',
      time:'',
      Desc:'',
      navActive:'全款计算',
      navbar:[
        {
          path:'/computePrice',
          text:'全款计算'
        },
        {
          path:'/computePrice/computeLoan',
          text:'贷款计算'
        },
        {
          path:'/computePrice/computeLoan',
          text:'保险计算'
        },
      ]
    }
  },
  components: {
    Header,
    Footer,
    ScrollToTop
  },
  created() {
    this.nakedPrice = this.$route.query.nakedPrice,
    this.title = this.$route.query.title
    this.Desc = this.$route.query.carDesc
    this.time = this.$route.query.carBir
  },
  methods: {
    changenav(text) {
      this.navActive = text
    }
  }
}
</script>

<style lang="stylus" scoped>
.computePrice
  width 100%
  .navbar
    width 100%
    height 4.4rem
    line-height 4.4rem
    background-color #ffffff
    border-bottom 0.1rem solid #f5f7fb
    ul
      li
        padding 0 1.5rem
        box-sizing border-box
        width 33%
        text-align center
        .navText
          color #999999
          font-size 1.6rem
          padding-bottom 1rem
        .navActive
          color #598BDD
          border-bottom 0.2rem solid #598BDD
</style>

