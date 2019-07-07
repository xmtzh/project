<template>
  <div class="allCars" >
    <div>12345</div>
    <div class="bscroll-container" ref="carsWrapper">
      <Header :title="title"></Header>
      <RecentlyLook></RecentlyLook>
      <!-- 条件选车 -->
      <div class="flexOne sortChooseCar">
        <router-link class="chooseOne" to="#" v-for="(item,index) in allCarsData.sortChooseCar" :key="index">
          <img :src="item.image" alt="">
          <span>{{item.name}}</span>
        </router-link>
      </div>
      <!-- 热门推荐 -->
      <div class="host-recommend">
        热门推荐
      </div>
      <!-- 推荐类型 -->
      <div class="recommend-type">
        <router-link class="recommend-type-one" to="#" v-for="(item,index) in allCarsData.recommendType" :key="index">
          {{item.info}}
        </router-link>
      </div>
      <!-- 品牌选车 -->
      <div class="flexOne searchBrand">
        <router-link class="chooseOne" to="#" v-for="(item,index) in allCarsData.searchBrand" :key="index">
          <img :src="item.image" alt="">
          <span>{{item.text}}</span>
        </router-link>
      </div>
      <!-- 图片选车 -->
      <div class="flexOne host-car">
        <router-link class="chooseOne" to="#" v-for="(item,index) in allCarsData.hostCar" :key="index">
          <img :src="item.image" alt="">
          <span>{{item.text}}</span>
        </router-link>
      </div>
      <!-- indexList -->
      <!-- <div class="wrap">
        <index-list :data="allCarsData.playerList">
        </index-list>
      </div> -->
      <div class="index-list">
        <ul class="index-list-wrap">
          <li v-for="(group,index) in allCarsData.playerList" :key="index" class="index-group" ref="indexGroup">
            <h3 class="index-group-title">{{group.title}}</h3>
            <ul>
              <li v-for="(item,index) in group.items" :key="index" class="index-group-item">
                <!-- <img v-if="useLazyLoad" v-lazy="item.avatar" class="avatar" alt=""> -->
                <img :src="item.avatar" class="avatar" alt="">
                <span class="name">{{item.name}}</span>
              </li>
            </ul>
          </li>
        </ul>
        <div class="index-nav">
          <ul>
            <li v-for="(item,index) in indexList" :key="index"  class="nav-item" :class="{'active':currentIndex===index}" @click="selectMenu(index)">{{item}}</li>
          </ul>
        </div>
      </div>
      <ScrollToTop></ScrollToTop>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'
import RecentlyLook from '@/components/recentlyLook'
import IndexList from '@/components/IndexList'
import ScrollToTop from '@/components/scrollToTop'
import Footer from '@/components/footer'
import BScroll from "better-scroll";
export default {
  name:'allcars',
  data() {
    return{
      allCarsData:{},
      title:'选车',
      currentIndex: 0,
      scrollY:0,
      listHeight:[],
    }
  },
  components: {
    Header,
    RecentlyLook,
    IndexList,
    ScrollToTop,
    Footer
  },
  methods: {
    selectMenu(index) {
      let indexGroup = this.$refs.indexGroup;
      let el = indexGroup[index];
      this.carsScroll.scrollToElement(el,300);
    },
    onChoose(e) {
      console.log(this.playerList)
    },
    _initScroll () {
      this.carsScroll = new BScroll(this.$refs.carsWrapper, {
        click: true,
        probeType: 3
      })
      this.carsScroll.on('scroll', pos => {
        this.scrollY = Math.abs(Math.round(pos.y));
        console.log(this.scrollY);
      })
    },
    _calculateHeight() {
      let indexGroup = this.$refs.indexGroup;
      let height = 0;
      this.listHeight.push(height);
      for(let i = 0; i<indexGroup.length; i++) {
        let item = indexGroup[i];
        height += item.clientHeight;
        this.listHeight.push(height)
      }
      console.log(this.listHeight)
    },
  },
  computed: {
    indexList() {
      return this.allCarsData.playerList.map(group => {
        return group.title.substring(0, 1)
      })
    }
  },
  created() {
    this.$http.get('https://www.easy-mock.com/mock/5d156ff297fe7161eff463c1/example_copy/Bitauto/allCars')
    .then(res => {
      this.allCarsData = res.data.data
      // 下面的代码检测页面结构是否渲染完成,完成了才会进行里面的操作
      this.$nextTick(() => {
        console.log('--------')
        this._initScroll();
        this._calculateHeight();
      })
    })
  }
}
</script>

<style lang="stylus" scoped>
.allCars
  background-color #f5f7fb
  width 100vw
  height 100vh

  .flexOne
    display flex
    background-color #fff
    padding 2rem 0
    .chooseOne
      display flex
      flex-direction column
      flex 1
      text-align center
      align-items center
      color #666
      img
        width 4rem
        margin-bottom 0.4rem
  .host-recommend
    padding 0 2rem
    font-weight bolder
    font-size 1.8rem
    color #000
    background-color #fff
  .recommend-type
    display flex
    background-color #fff
    justify-content space-between
    padding 1.5rem 2rem
    .recommend-type-one
      width 30%
      text-align center
      border 0.1rem solid #EAEEF5
      padding 1rem 1rem
      box-sizing border-box
      font-size 1.2rem
      color #333
  .searchBrand
    padding-top 0
  .host-car
    padding 0 0 2rem 0
    .chooseOne
      img
        width 9.7rem
  .index-list
    width 100%
    .index-list-wrap
      height 100%
      overflow auto
      -webkit-overflow-scrolling touch //#issue-368550974
      .index-group
        padding-bottom 3rem
        display flex
        flex-direction column
        background-color #fff
        .index-group-title
          height 3rem
          line-height 3rem
          padding-left 2rem
          font-size 12px
          color rgba(0, 0, 0, 0.5)
          background-color #f5f5f5
        .index-group-item
          display flex
          align-items center
          padding 1rem 0
          margin 0 2rem
          list-style none
          border-bottom 0.1rem solid #f4f4f4
          .avatar
            width 4rem
            height 4rem
            border-radius 50%
          .name
            margin-left 2rem
            color rgba(0, 0, 0, 0.5)
            font-size 14px
    .index-nav
      position fixed
      right 0
      top 50%
      width 2rem
      padding 2rem 0
      text-align center
      color blue
      border-radius 10
      transform translateY(-50%)
      z-index 10000
      .nav-item
        padding 0.3rem
        font-size 1.2rem
        color blue
        list-style none
        &.active
          color #ffcd32
  .wrap
    width 100%
    height 100%


</style>

