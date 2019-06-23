<template>
  <div class="allCars">
    <Header></Header>
    <RecentlyLook></RecentlyLook>
    <!-- 条件选车 -->
    <div class="sortChooseCar">
      <router-link class="chooseOne" to="#" v-for="(item,index) in sortChooseCar" :key="index">
        <img :src="item.image" alt="">
        <span>{{item.name}}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'
import RecentlyLook from '@/components/recentlyLook'

export default {
  name:'allcars',
  data() {
    return{
      sortChooseCar:[
        {image:'http://image.bitautoimg.com/uimg/2017xuanchegaiban/ic_beans_8@2x.png',name:'上市新车'},
        {image:'http://image.bitautoimg.com/uimg/2017xuanchegaiban/ic_beans_7@2x.png',name:'销量排行'},
        {image:'http://image.bitautoimg.com/uimg/2017xuanchegaiban/ic_beans_1@2x.png',name:'新能源'},
        {image:'http://image.bitautoimg.com/uimg/2017xuanchegaiban/ic_beans_9@2x.png',name:'条件选车'},
      ]
    }
  },
  components: {
    Header,
    RecentlyLook
  }
}
</script>

<style lang="stylus" scoped>
.allCars
  background-color #f5f7fb
  .sortChooseCar
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
</style>

