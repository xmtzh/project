<template>
  <div class="allCars">
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
    <div class="wrap">
      <index-list :data="allCarsData.playerList">
      </index-list>
    </div>

    <!-- <div class="wrap">
      <mt-index-list>
        <mt-index-section v-for="(item,index) in playerList" :key="index" :index="item.title">
          <mt-cell  v-for="(car,index) in item.items" :key="index"  :title="car"></mt-cell>
        </mt-index-section>
      </mt-index-list>
    </div> -->
    <ScrollToTop></ScrollToTop>
  </div>
</template>

<script>
import Header from '@/components/header'
import RecentlyLook from '@/components/recentlyLook'
import IndexList from '@/components/IndexList'
import ScrollToTop from '@/components/scrollToTop'
export default {
  name:'allcars',
  data() {
    return{
      allCarsData:{},
      title:'选车',

    }
  },
  components: {
    Header,
    RecentlyLook,
    IndexList,
    ScrollToTop
  },
  methods: {
    onChoose(e) {
      console.log(this.playerList)
    }
  },
  created() {
    this.$http.get('https://www.easy-mock.com/mock/5d156ff297fe7161eff463c1/example_copy/Bitauto/allCars')
    .then(res => {
      this.allCarsData = res.data.data
      console.log(this.allCarsData)
    })
  }
}
</script>

<style lang="stylus" scoped>
.allCars
  background-color #f5f7fb
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
  .wrap
    width 100%
    height 100%


</style>

