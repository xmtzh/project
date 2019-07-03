<template>
  <div class="generalDesc">
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
      isFocus:false
    }
  },
  methods: {
    changeFocus() {
      this.isFocus = !this.isFocus
    }
  }
}
</script>

<style lang="stylus" scoped>
.generalDesc
  width 100%
  .threeImg
    width 100%
    display flex
    color #fff
    overflow hidden
    .leftImg
      width 66.6%
      position relative
      img
        width 100%
        height 100%
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


</style>

