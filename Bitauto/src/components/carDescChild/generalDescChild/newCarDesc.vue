<template>
  <div class="seach">
    <img src="../../../images/noCar.png" alt="">
    <span>抱歉，没有符合条件的车款</span>
    <span class="btn">清空</span>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.seach
  width 100%
  display flex
  flex-direction column
  align-items center
  padding 3rem 0
  img
    width 10rem
  span
    margin-top 1rem
    font-size 1.4rem
  .btn
    width 10rem
    padding 0.5rem 2rem
    font-size 1.6rem
    text-align center
    border 0.1rem solid #cccccc
    border-radius 0.5rem
</style>

