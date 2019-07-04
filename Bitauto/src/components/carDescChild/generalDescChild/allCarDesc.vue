<template>
  <div class="allCarDesc">
    <div class="allCars"  v-for="(item,index) in allData" :key="index">
      <div class="title">{{item.type}}</div>
      <div class="carDesc"  v-for="(oneCar,index1) in item.event" :key="index1">
        <div class="up flex">
          <h2>{{oneCar.title}}</h2>
          <span>{{oneCar.price}}万</span>
        </div>
        <div class="middle flex">
          <span class="desc">{{oneCar.eventDesc}}</span>
          <span>热度</span>
          <span class="guidingPrice">指导价:{{oneCar.guidingPrice}}万</span>
        </div>
        <div class="down flex">
          <div class="contrast conFlex">
            <img src="../../../images/jiahao.png" alt="">
            <span>对比</span>
          </div>
          <router-link to="#" class="compute conFlex">
            <img src="../../../images/yunsuan.png" alt="">
            <span>计算器</span>
          </router-link>
          <span class="floorPrice">
            询底价
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'allCarDesc',
  data() {
    return {
      allData:[
        {
          type:'1.4升/110kW 涡轮增压',
          event:[
              {
                title:'2019款 280TSI 双离合 舒适版',
                price:'14.49',
                eventDesc:'7挡 双离合',
                guidingPrice:'14.79'
              },
              {
                title:'2019款 280TSI 双离合 豪华版',
                price:'15.69',
                eventDesc:'7挡 双离合',
                guidingPrice:'15.99'
              },
            ]
        },
        {
          type:'1.5升/83kW ',
          event:[
            {
              title:'2019款 1.5L 手自一体 风尚版',
              price:'12.49',
              eventDesc:'6挡 手自一体',
              guidingPrice:'12.79'
            },
            {
              title:'2019款 1.5L 手自一体 舒适版',
              price:'13.69',
              eventDesc:'6挡 手自一体',
              guidingPrice:'13.99'
            },
          ]
        },
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.allCarDesc
  background-color #fff
  width 100%
  margin-bottom 1rem
  .allCars
    width 100%
    .title
      padding 0.5rem 1.5rem
      background-color #F5F5F5
      color #999
      font-size 1.4rem
    .carDesc
      width 100%
      padding 1rem 1.5rem
      display flex
      flex-direction column
      .flex
        width 100%
        display flex
        align-items center
        margin-bottom 0.5rem
        position relative
      .up
        h2
          font-size 1.6rem
          font-weight bolder
          color #333
        span
          position absolute
          right 1rem
          font-size 1.8rem
          color #FF4F53
      .middle
        color #999
        .desc
          margin-right 1rem
        .guidingPrice
          position absolute
          right 1rem
      .down
        margin-top 1.2rem
        .conFlex
          width 25%
          display flex
          align-items center
          img
            width 1.8rem
            height 1.8rem
            margin-right 0.6rem
          span
            color #508CEE
            font-size 1.4rem
        .floorPrice
          width 50%
          color #FF4F53
          background rgba(255,122,122,0.05)
          border 0.1rem solid #FFA3A5
          height 3.3rem
          border-radius 0.3rem
          font-size 1.5rem
          display flex
          align-items center
          justify-content center



</style>

