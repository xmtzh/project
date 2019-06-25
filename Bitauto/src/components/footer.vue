<template>
  <div class="footer">
    <div class="search">
      <input class="inputSearch" type="search" v-model="searchName">
      <div class="serachBtn">
        <img src="../images/searchB.png" alt="">
      </div>
    </div>
    <div class="textNav">
      <router-link to="#" class="textNav-one">看电脑版</router-link>
      <em>|</em>
      <router-link to="#" class="textNav-one">网站地图</router-link>
      <em>|</em>
      <router-link to="#" class="textNav-one">提意见</router-link>
      <em>|</em>
      <router-link to="#" class="textNav-one">下载app</router-link>
    </div>
    <div class="webInfo">
      <p>购车热线: <router-link to="#" class="webInfo-link">4000-168-168</router-link> (9:00 - 18:00)</p>
      <p>易车 • 2019<router-link to="#" class="webAddress">m.yiche.com</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  name:'footer',
  data() {
    return {
      searchName:''
    }
  }
}
</script>

<style lang="stylus" scoped>
.footer
  width 100%
  margin-top 1rem
  background-color #fff
  padding-bottom 5rem
  .search
    padding 1.5rem 2rem
    position relative
    background-color #fff
    .inputSearch
      display inline-block
      width 85%
      height 4rem
      border 0.1rem solid #ECECEC
      box-sizing border-box
      border-top-left-radius 5rem
      border-bottom-left-radius 5rem
      padding-left 2rem
    .serachBtn
      position absolute
      top 1.5rem
      left 85%
      transform translate(-50%)
      width 15%
      height 4rem
      background-color #fff
      border-top-right-radius 5rem
      border-bottom-right-radius 5rem
      padding 1rem
      box-sizing border-box
      cursor pointer
      border 0.1rem solid #ECECEC
      img
        width 2rem
        position absolute
        left 50%
        transform translate(-50%)
  .textNav
    display flex
    background-color #fff
    padding 0 6rem 1.5rem
    justify-content space-between
    font-size 1.4rem
    color #ececec
    .textNav-one
      color #666
  .webInfo
    display flex
    flex-direction column
    margin 0 7rem
    border-top 0.1rem solid #f5f5f5
    padding 1.5rem 0
    align-items center
    p
      line-height 2.5rem
      color #999
      font-size 1.2rem
      .webInfo-link
        color #999
        font-size 1.4rem
        font-weight bolder
      .webAddress
        color #999

</style>

