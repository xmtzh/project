<template>
  <div class="index">
    <!-- 头部 -->
    <div class="header">
      <router-link to="#" class="logo">
        <img class="logoImg" src="http://image.bitautoimg.com/uimg/mbt2018/images/logo1809.png" alt="">
      </router-link>
      <router-link to="/userInfo" class="login">
        <img class="loginImg" src="http://image.bitautoimg.com/uimg/mbt2016/images/ico_header_logout.png" alt="">
      </router-link>
      <router-link to="#" class="active">
        <img src="http://image.bitautoimg.com/bitauto/2019/06/03/d3d9d316-0ec8-43cb-af51-297359aed46c_630_w0.png" alt="">
      </router-link>
    </div>
    <!-- 导航 -->
    <div class="navbar">
      <ul>
        <li v-for="(item,index) in allData.navbar" :key="index">
          <router-link class="navText" to="#">{{item}}</router-link>
        </li>
      </ul>
      <div class="right-opc"></div>
    </div>
    <!-- 最近看过 -->
    <div class="recently">
      <RecentlyLook></RecentlyLook>
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
      <Tabs value="name1">
        <Tab-pane label="按品牌" name="name1" >
          <router-link class="brand" to="/brandCar" v-for="(item,index) in allData.tabbarContainer1" :key="index" >
            <img :src="item.image" alt="">
            <p>{{item.text}}</p>
          </router-link>
          <router-link class="brand" to="/allCars">
            <img src="../images/more.png" alt="">
            <p>更多</p>
          </router-link>
        </Tab-pane>
        <Tab-pane label="按条件" name="name2">
          <router-link class="condition" to="#" v-for="(item,index) in allData.tabbarContainer2" :key="index">
            <p>{{item.text}}</p>
          </router-link>
          <router-link class="condition" to="#">
            <p>更多>></p>
          </router-link>
        </Tab-pane>
        <Tab-pane label="热门车" name="name3">
          <router-link class="hot-car" to="#" v-for="(item,index) in allData.tabbarContainer3" :key="index" >
            <img :src="item.image" alt="">
            <p>{{item.text}}</p>
          </router-link>
        </Tab-pane>
        <Tab-pane label="新能源" name="name4">
          <router-link class="newPower" to="#" v-for="(item,index) in allData.tabbarContainer4" :key="index" >
            <img :src="item.image" alt="">
            <p>{{item.text}}</p>
          </router-link>
          <router-link class="newPower" to="#">
            <img src="../images/more.png" alt="" style="width:45%">
            <p>更多</p>
          </router-link>
        </Tab-pane>
        <Tab-pane label="二手车" name="name5">
          <router-link class="used-car-a" to="#" v-for="(item,index) in allData.tabbarContainer5a" :key="index" >
            <img :src="item.image" alt="">
            <p>{{item.text}}</p>
          </router-link>
          <router-link class="used-car-b" to="#" v-for="(item,index) in allData.tabbarContainer5b" :key="index" >
            <p>{{item.text}}</p>
          </router-link>
        </Tab-pane>
      </Tabs>
    </div>
    <!-- 轮播图 -->
    <div class="wrapper">
        <swiper :options="swiperOption" >
            <swiper-slide v-for='item of allData.swiperList' :key="item.id">
                <img :src="item.imgUrl" class="swiper-img">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
    <!-- 四方格 -->
    <div class="tuwen">
      <router-link class="tuwen-one" to="#" v-for="(item,index) in allData.tuwenInfo" :key="index">
        <img :src="item.img" alt="">
        <div class="tuwen-text">
          <span class="tuwen-text-title">{{item.title}}</span>
          <span class="tuwen-text-desc">{{item.desc}}</span>
        </div>
      </router-link>
    </div>
    <!-- 买车活动 -->
    <div class="buy-car-active">
      <router-link class="buy-car-active-one" to="#" >
        <div class="imgBox" style="backgroundColor:#fc6964">
          <img src="../images/liwu.png" alt="">
        </div>
        <p>优惠购车</p>
      </router-link>
      <router-link class="buy-car-active-one" to="#" >
        <div class="imgBox" style="backgroundColor:#fdb63b">
          <img src="../images/naozhong.png" alt="">
        </div>
        <p>商家特卖</p>
      </router-link>
      <router-link class="buy-car-active-one" to="#">
        <div class="imgBox" style="backgroundColor:#9794fd">
          <img src="../images/card.png" alt="">
        </div>
        <p>贷款买车</p>
      </router-link>
      <router-link class="buy-car-active-one" to="#">
        <div class="imgBox" style="backgroundColor:#5d9ef8">
          <img src="../images/zhong.png" alt="">
        </div>
        <p>易车众筹</p>
      </router-link>
      <router-link class="buy-car-active-one" to="#">
        <div class="imgBox" style="backgroundColor:#60d4e1">
          <img src="../images/maiche.png" alt="">
        </div>
        <p>高价卖车</p>
      </router-link>
    </div>
    <!-- 猜你喜欢 -->
    <div class="like-title">
      <h3>猜你喜欢</h3>
      <div class="title-right" @click="changeLike">
        <img :class="[rotate?'go':'aa']" src="../images/update.png" alt="">
        <p>换一换</p>
      </div>
    </div>
    <div class="like-container">
      <ul>
        <li v-for="(item,index) in likeContainer" :key="index">
          <router-link to="#" >
            <img :src="item.image" alt="">
            <h4>{{item.name}}</h4>
            <p>{{item.price}}</p>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 新闻导航 -->
    <div class="news-nav">
      <mt-navbar v-model="selected" class="mtnavbar">
        <mt-tab-item v-for="(item,index) in allData.mtnavbar" :key="index" :id="item.id" class="bar">
          {{item.content}}</mt-tab-item>
      </mt-navbar>
      <!-- tab-container -->
      <mt-tab-container v-model="selected" class="mttabcontainer">
        <mt-tab-container-item id="1">
          <newsBox></newsBox>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell v-for="(n,i) in one" :key="i" :title="'测试 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <mt-cell v-for="(n,i) in one" :key="i" :title="'选项 ' + n" />
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <!-- 底部组件 -->
    <Footer></Footer>
    <ScrollToTop></ScrollToTop>
  </div>
</template>

<script>
import newsBox from '@/components/newsBox'
import RecentlyLook from '@/components/recentlyLook'
import Footer from '@/components/footer'
import ScrollToTop from '@/components/scrollToTop'

export default {
  name:'index',
  data() {
    return {
      allData:{},
      navbar:[],
      nowPage:0,
      searchName:'',
      rotate:false,
      // 轮播设置
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 2000,
        speed:1000
      },
      likeContainer:[],
      // 新闻数据
      one:[
        1,2,3
      ],
      selected:"1",
    }
  },
  components:{
    newsBox,
    RecentlyLook,
    Footer,
    ScrollToTop
  },
  methods:{
    changeLike() {
      this.likeContainer = []
      this.rotate=!this.rotate;
      let num = 4
      let page = Math.ceil(this.allData.likeContainerAll.length / num)
      // console.log(page)
      for(let i = this.nowPage*num; i < (this.nowPage+1)*num; i++){
        if(this.allData.likeContainerAll[i]){
          this.likeContainer.push(this.allData.likeContainerAll[i])
        }
      }
      console.log(this.likeContainer)
      if(this.nowPage === page - 1) {
        this.nowPage = 0
      }else {
        this.nowPage++
      }
    },
    tiao() {
      console.log('tiao')
      this.$router.push({path:'/allCars'})
    }
  },
  created() {
    this.$http.get('https://www.easy-mock.com/mock/5d156ff297fe7161eff463c1/example_copy/Bitauto/home')
    .then(res => {
      this.allData = res.data.data
      console.log(this.allData)
      this.changeLike()
    })
  },
  mounted() {}
}
</script>

<style lang="stylus">
.index
  background-color #f5f7fb
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
    position absolute
    background linear-gradient(to left, rgba(54,119,224,1),rgba(54,119,224,0))
    top 5rem
    right 0
.recently
  background-color #fff
.search
  padding 0 2rem
  position relative
  background-color #fff
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
  padding 1rem 2rem
  width 100%
  box-sizing border-box
  background-color #fff
  // background-color #3677E0
  .ivu-tabs-nav
    width 100%
    .ivu-tabs-nav-prev,.ivu-tabs-nav-next
      display none
    .ivu-tabs-tab
      width 20%
      padding 0.8rem 0.8rem
      box-sizing border-box
      text-align center
      margin 0
      &:hover
        color #3677E0
    .ivu-tabs-ink-bar
      width 20% !important
      display none
  .ivu-tabs-nav .ivu-tabs-tab-focused
    font-weight bolder
  .brand
    width 20%
    float left
    text-align center
    margin-bottom 1rem
    color #666
    img
      width 60%
  .condition
    height 4.4rem
    line-height 4.4rem
    width 33.3%
    float left
    text-align center
    color #666
    font-size 1.6rem
  .hot-car
    width 25%
    float left
    text-align center
    color #666
    margin-bottom 1rem
    img
      width 70%
  .newPower
    width 25%
    float left
    text-align center
    color #666
    margin-bottom 1rem
    img
      width 70%
  .used-car-a
    width 25%
    float left
    justify-content center
    color #666
    position relative
    padding 0 1rem
    box-sizing border-box
    margin-bottom 1.8rem
    img
      width 50%
      display inline-block
      float left
      margin-right 0.5rem
    p
      position absolute
      top 50%
      transform translateY(-50%)
      float left
      display inline-block
  .used-car-b
    height 4.4rem
    line-height 4.4rem
    width 25%
    float left
    text-align center
    color #666
    font-size 1.4rem



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
    background-color #fff
    .swiper-img
      width: 100%
.tuwen
  padding 0 2rem
  width 100%
  box-sizing border-box
  background-color #fff
  overflow hidden
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
.buy-car-active
  width 100%
  padding 2rem 2rem
  overflow hidden
  background-color #fff
  .buy-car-active-one
    width 20%
    float left
    text-align center
    .imgBox
      width 70%
      text-align center
      background-color pink
      padding 1rem
      margin 0 15% 0.5rem
      box-sizing border-box
      border-radius 50%
      img
        width 80%
        top 10%
    p
      color #666
.like-title
  width 100%
  padding 1rem 2rem
  position relative
  overflow hidden
  justify-content center
  margin-top 1rem
  background-color #fff
  h3
    float left
  .title-right
    display flex
    position absolute
    right 2rem
    align-items center
    img
      width 1.5rem
      height 1.5rem
      margin-right 1rem
    p
      font-size 1.4rem
.like-container
  padding 1rem 0 2rem 2rem
  background #FFF
  margin-bottom 1rem
  overflow hidden
  overflow-x scroll
  ul
    white-space nowrap
    li
      width 9rem
      display inline-block
      text-align center
      margin-right 1.5rem
      img
        width 100%
      h4
        color: #666
      p
        color: #ff8689
.news-nav
  width 100%
  background-color #fff
  padding 0 2rem
  .is-selected
    color #3677E0 !important
    font-weight bolder
  .mtnavbar
    white-space nowrap
    overflow hidden
    overflow-x scroll
    border-bottom 0.1rem solid #f5f7fb
    .bar
      display inline-block
      color #666
      margin 0 2rem
      height 5rem
      line-height 5rem
      // &:hover
      //   color #3677E0
      //   font-weight bolder
      //   border-bottom 0.2rem solid #3677E0
      .mint-tab-item-label
        font-size 1.6rem
  .mttabcontainer
    width 100%
    padding 2rem 0
    box-sizing border-box
    .mint-cell-wrapper
      background-image url('')
.aa
  transition all 1s
  transform rotate(-360deg)
.go
  transform rotate(360deg)
  transition all 1s
</style>

