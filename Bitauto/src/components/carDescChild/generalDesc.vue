<template>
  <div class="generalDesc">
    <div class="up">
      <!-- 三张图片 -->
      <div class="threeImg">
        <router-link to="#" class="leftImg">
          <img :src="leftImg" alt="">
          <span>外观</span>
        </router-link>
        <div class="rightImg">
          <router-link to="#" class="rightImgone">
            <img :src="rightImgUp" alt="">
            <span>全景</span>
          </router-link>
          <router-link to="#" class="rightImgone">
            <img :src="rightImgDown" alt="">
            <span>图解</span>
          </router-link>
        </div>
      </div>
      <!-- 品牌详情 -->
      <div class="brandDesc">
        <img :src="brandImg" alt="">
        <div class="text">
          <span>{{carName}}</span>
          <router-link to="#" class="oil-wear">
            <span>油耗 5.7-5.8L </span>
            <img src="../../images/right.png" alt="">
          </router-link>
        </div>
        <div class="focus" @click="changeFocus">
          <img src="../../images/xxed.png" alt="" v-if="isFocus">
          <img src="../../images/xx.png" alt="" v-else>
          <span>关注</span>
        </div>
      </div>
      <!-- 条件推荐 -->
      <div class="twoBox">
        <router-link to="#" v-for="(item,index) in condition" :key="index" class="BoxOne">
          <span>{{item.title}}</span>
          <img src="../../images/rightB.png" alt="">
        </router-link>
      </div>
    </div>
    <div class="middle">
      <!-- 询底价 -->
      <div class="floor-price">
        <div class="left-price">
          <span class="refPrice"><h4>{{refPrice}}</h4>(南昌参考价)</span>
          <span class="guidingPrice">厂商指导价: {{guidingPrice}}</span>
          <router-link to="#" class="relPrice">
            <span>真实成交价</span>
            <img src="../../images/rightB.png" alt="">
          </router-link>
        </div>
        <div class="right-btn">
          <router-link to="#" class="btnText">询底价</router-link>
        </div>
      </div>
      <!-- 滑动栏 -->
      <div class="scroll-item">
        <ul>
          <li v-for="(item,index) in scrollContainer" :key="index">
            <router-link to="#" class="li-item">
              <span class="title">{{item.title}}</span>
              <span class="desc">{{item.desc}}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="down">
      <div class="nav">
        <div @click="changeAll" :class="['menu',{'active':acriveIndex === 1 }]">
          <router-link :class="['LG',{'activeT':acriveIndex === 1 }]" to="/carDesc">全部在售</router-link>
        </div>
        <div @click="changeNew" :class="['menu',{'active':acriveIndex === 2 }]">
          <router-link :class="['LG',{'activeT':acriveIndex === 2 }]" to="/carDesc/newCarDesc">2019款</router-link>
        </div>
        <div @click="changeIsShow" class="screen">
          <span>筛选</span>
          <img src="../../images/loudou.png" alt="">
        </div>
      </div>
      <router-view></router-view>
    </div>
    <!-- 右侧栏 -->
    <div class="right-bar" v-if="isShow">
      <img @click="changeIsHid" class="leftImg" src="../../images/threeRight.png" alt="">
    </div>
    <div :class="['right-container',isShow?'swiperLeft':'swiperRight']">
      <div class="option">
        <div class="type">{{performanceParDisplace.title}}</div>
        <div class="parameter" >
          <span :class="{'selected':currentO === index}"
          v-for="(event,index) in performanceParDisplace.parameter" :key="index"
          @click="changeCurOut(index)">
            {{event.amount}}
          </span>
        </div>
      </div>
      <div class="option">
        <div class="type">{{performanceParTransmis.title}}</div>
        <div class="parameter" >
          <span :class="{'selected':currentT === index}"
          v-for="(event,index) in performanceParTransmis.parameter" :key="index"
          @click="changeCurTra(index)">
            {{event.amount}}
          </span>
        </div>
      </div>
      <div class="bottom-btn">
        <div class="left" @click="clear">
          <img src="../../images/lajitong.png" alt="">
          <span>清除</span>
        </div>
        <div class="right" @click="completed">
          完成
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'generalDesc',
  data() {
    return {
      carName:'上汽大众T-Cross',
      brandImg:'http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_8_100.png',
      leftImg:'http://img2.bitautoimg.com/autoalbum/files/20190611/241/20190611203920392017666_6764189_4.jpg',
      rightImgUp:'http://image.bitauto.com/autoalbum/panophotos/375069/375069.tiles/thumb.jpg',
      rightImgDown:'http://img2.bitautoimg.com/bitauto/2019/06/12/55cd704a-12e0-4556-9cb6-59767b31939b_630_w0.jpg',
      isFocus:false,
      isShow:false,
      condition:[
        {
          title:'12-18万推荐车'
        },
        {
          title:'小型SUV第19名'
        }
      ],
      refPrice:'12.49-15.99万 ',
      guidingPrice:'12.79-15.99万',
      scrollContainer:[
        {
          title:'以旧换新',
          desc:'周期短 时间快'
        },
        {
          title:'分期',
          desc:'首付3.84万起'
        },
        {
          title:'降价优惠',
          desc:'直降0.3万'
        },
        {
          title:'经销商',
          desc:'附近经销商'
        },
      ],
      acriveIndex: 1,
      showBrand:false,
      performanceParDisplace:{
        title:'排量',
        parameter:[
          {
            amount:'不限'
          },
          {
            amount:'1.4L'
          },
          {
            amount:'1.5L'
          },
          {
            amount:'1.8L'
          },
        ]
      },
      performanceParTransmis:{
        title:'变速箱',
        parameter:[
          {
            amount:'不限'
          },
          {
            amount:'双离合'
          },
          {
            amount:'手自一体'
          },
        ]
      },

      currentO:0,
      currentT:0
    }
  },
  methods: {
    changeFocus() {
      this.isFocus = !this.isFocus
    },
    changeAll() {
      this.acriveIndex = 1
      console.log(this.acriveIndex)
    },
    changeNew() {
      this.acriveIndex = 2
      console.log(this.acriveIndex)
    },
    changePath() {
      let path = this.$route.path
      if(path == '/carDesc') {
        this.acriveIndex = 1
      }else {
        this.acriveIndex = 2
      }
    },
    changeIsShow() {
      this.isShow = true
    },
    changeCurOut(index) {
      this.currentO = index
    },
    changeCurTra(index) {
      this.currentT = index
    },
    clear() {
      this.currentT = 0;
      this.currentO = 0;
    },
    changeIsHid() {
      this.isShow = false
    },
    completed() {
      this.changeIsHid()
    }
  },
  watch: {
    // 页面路由改变时更改acriveIndex的值
    $route(to, from) {
      console.log(this.$route.path);
      this.changePath();
    }
  },
  created() {
    // 页面路由加载时更改acriveIndex的值
    this.changePath();
  }
}
</script>

<style lang="stylus" scoped>
.active
  border-bottom 0.2rem solid #297dcc
.activeT
  color #297dcc !important
  font-weight bolder
.selected
  border 0.1rem solid #508CEE !important
  color #508CEE !important
.generalDesc
  width 100%
  background-color #f5f7fb
  .up
    background-color #fff
    margin-bottom 1rem
    .threeImg
      width 100%
      display flex
      color #fff
      overflow hidden
      .leftImg
        width 66.6%
        position relative
        img
          display block
          width 100%
          // height 100%
          max-width 100%
          max-height 100%
        span
          position absolute
          padding 0.1rem 0.5rem
          background-color rgba(240,85,80,0.8)
          color #fff
          top 0
          left 0
      .rightImg
        width 33.3%
        display flex
        flex-direction column
        overflow hidden
        .rightImgone
          width 100%
          height 50%
          position relative
          overflow hidden
          box-sizing border-box
          border-left 0.05rem solid #fff
          border-bottom 0.05rem solid #fff
          img
            position absolute
            width 100%
            min-width 100%
            min-height 100%
            left 50%
            top 50%
            transform translate(-50%,-50%)
            overflow hidden
            // height 100%
          span
            color #fff
            position absolute
            padding 0.1rem 0.5rem
            background-color rgba(240,85,80,0.8)
            top 0
            left 0
    .brandDesc
      width 92%
      margin 0 4%
      padding 1.5rem 0
      box-sizing border-box
      display flex
      align-items center
      position relative
      border-bottom 0.1rem solid #F5F5F5
      img
        width 5.5rem
        height 5.5rem
        margin-right 1rem
      .text
        display flex
        flex-direction column
        flex 1
        span
          font-size 1.8rem
          color #000
        .oil-wear
          display flex
          align-items center
          margin-top 0.5rem
          span
            font-size 1.4rem
            color #666
          img
            margin-left 0.5rem
            width 1.5rem
            height 1.5rem
      .focus
        display flex
        flex-direction column
        align-items center
        img
          width 2rem
          height 2rem
          margin 0 auto 5px
        span
          font-size 1.2rem
    .twoBox
      width 92%
      margin 0 4%
      padding 1.5rem 0
      display flex
      .BoxOne
        display flex
        border 0.1rem solid rgba(80,140,238,0.4)
        border-radius 0.2rem
        margin-right 2rem
        align-items center
        padding 0.5rem 1rem
        span
          color #508CEE
        img
          width 1rem
          height 1rem
  .middle
    background-color #fff
    width 100%
    margin-bottom 1rem
    .floor-price
      display flex
      width 100%
      padding 1rem 1.5rem
      position relative
      .left-price
        display flex
        flex-direction column
        color #999
        span
          margin-bottom 0.3rem
        .refPrice
          display flex
          align-items flex-end
          h4
            font-size 1.6rem
            color #FF4158
            margin-right 0.5rem
        .relPrice
          span
            color #508CEE
          img
            width 1rem
            height 1rem
      .right-btn
        position absolute
        right 1.5rem
        width 12.2rem
        height 3.5rem
        background-color #FF4F53
        border-radius 0.2rem
        font-size 1.4rem
        display flex
        justify-content center
        align-items center
        .btnText
          color #fff
    .scroll-item
      overflow-x scroll
      padding 1.5rem 0
      ul
        padding-left 1rem
        white-space nowrap
        li
          width 10rem
          height 6rem
          display inline-block
          padding 1rem 0 0 1.5rem
          background-color #fff
          box-shadow 0 0.2rem 8px 0 rgba(38,41,49,0.1)
          margin-right 1rem
          .li-item
            display flex
            flex-direction column
            .title
              font-size 1.4rem
              margin-bottom 0.3rem
              color #000
            .desc
              color #999
  .down
    background-color #fff
    margin-bottom 1rem
    .nav
      width 100%
      display flex
      position relative
      align-items center
      .menu
        text-align center
        font-size 1.5rem
        color #666
        padding 1rem 1.5rem
        .LG
          display inline-block
          width 100%
          height 100%
          font-size 1.6rem
      .screen
        position absolute
        right 1.5rem
        display flex
        img
          width 1.5rem
          height 1.5rem
        span
          font-size 1.4rem
          color #508CEE
  .right-bar
    position fixed
    top 0
    right 0
    left 0
    bottom 0
    background-color rgba(0,0,0,0.3)
    z-index 999
    .leftImg
      position fixed
      z-index 1000
      width 2rem
      top 50%
      left 10%
  .swiperLeft
    transform translate(0px,0px)
    transition transform .4s
  .swiperRight
    transform translate(100%,0px)
    transition transform .4s
  .right-container
      width 80%
      position fixed
      background-color #fff
      top 0
      right 0
      bottom 0
      z-index 999
      .option
        width 100%
        padding 0 1.5rem
        box-sizing border-box
        .type
          margin 1rem 0
          color #999
          font-size 1.4rem
        .parameter
          width 100%

          display flex
          justify-content space-between
          flex-wrap wrap
          span
            margin-bottom 1rem
            width 30%
            height 4rem
            border 0.1rem solid #ededf1
            border-radius 0.3rem
            font-size 1.6rem
            display flex
            justify-content center
            align-items center
            color #333


      .bottom-btn
        position absolute
        bottom 0
        display flex
        width 100%
        height 6rem
        background-color #f7f7f7
        box-sizing border-box
        padding 1.2rem 1rem
        .left
          width 55%
          display flex
          align-items center
          img
            width 1.6rem
            margin-right 0.5rem
          span
            font-size 1.4rem
            color #333
        .right
          width 45%
          height 100%
          background-color #297DCC
          border-radius 0.3rem
          font-size 1.4rem
          display flex
          align-items center
          justify-content center
          color #fff










</style>

