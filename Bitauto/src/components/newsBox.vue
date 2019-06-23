<template>
  <div class="newsbox">
    <div class="left">
      <div class="title">
        {{news.title}}
      </div>
      <div class="newsInfo">
        <span v-if="news.name" class="Info">{{news.name}}</span>
        <span v-if="news.time" class="Info">{{news.time}}</span>
        <span v-if="news.commentNum" class="Info">{{news.commentNum}}评论</span>
      </div>
    </div>
    <div class="right">
      <img :src="news.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: {
        id: '1',
        newsId: '1',  
        name:'易车',
        time:'6月21日',
        commentNum:21,
        title:'看着几十万的颜值！这两款12万起的大牌SUV选谁好？',
        image:'https://image.bitautoimg.com/wapimg-226-150/mapi/media/2019/06/19/62d9d02ffc3f4c27aa3f04adce4ccc6b.jpg'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.newsbox
  display flex
  overflow hidden
  .right
    width 35%
    img
      width 100%
  .left
    width 60%
    box-sizing border-box
    margin-right 5%
    position relative
    .title
      position absolute
      display -webkit-box
      -webkit-line-clamp 2
      -webkit-box-orient vertical
      top 0
      color #333
      overflow hidden
      text-overflow ellipsis
      font-size 1.8rem
      line-height 2.8rem

    .newsInfo
      position absolute
      bottom 0
      .Info
        margin-right 1rem
        color #999

</style>

