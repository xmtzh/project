<template>
  <div class="index-list">
    <ul class="index-list-wrap" ref="indexWrap" @scroll="onListWrapScroll">
      <li v-for="(group,index) in data" :key="index" class="index-group" ref="indexGroup">
        <h3 class="index-group-title">{{group.title}}</h3>
        <ul>
          <li @click="clickItem(item)" v-for="(item,index) in group.items" :key="index" class="index-group-item">
            <img v-if="useLazyLoad" v-lazy="item.avatar" class="avatar" alt="">
            <img v-else :src="item.avatar" class="avatar" alt="">
            <span class="name">{{item.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
    <div class="index-nav">
      <ul>
        <li v-for="(item,index) in indexList" :key="index" @touchstart.prevent="_onTouchStartIndex(index)" :data-index="index" class="nav-item" :class="{'active':currentIndex===index}">{{item}}</li>
      </ul>
    </div>
    <transition name="fade">
      <div class="index-indicator" v-show="moving">{{currentIndicator}}</div>
    </transition>
  </div>
</template>
<script type="text/javascript">
const INDICATOR_INDURATION = 1000
const TITLE_HEIGHT = 30
export default {
  name: 'index-list',
  props: {
    data: {
      type: Array,
      default: function() {
        return []
      }
    },
    useLazyLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentIndex: 0,
      moving: false,
      currentIndicator: ''
    }
  },
  watch: {
    currentIndex(newVal) {
      clearTimeout(this.timer)
      this.currentIndicator = this.indexList[this.currentIndex]
      this.moving = true
      this.timer = setTimeout(() => {
        this.moving = false
      }, INDICATOR_INDURATION)
    }
  },
  computed: {
    indexList() {
      return this.data.map(group => {
        return group.title.substring(0, 1)
      })
    }
  },
  created() {
    this.listHeight = []
    this.timer = null
    this.scrollTimer = null
  },
  mounted() {
    setTimeout(() => {
      this._calculateHeight()
    }, 20)
  },
  methods: {
    _calculateHeight() {
      this.listHeight = []
      const list = this.$refs.indexGroup
      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i < list.length; i++) {
        let item = list[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
      console.log(this.listHeight)
    },
    _onTouchStartIndex(index) {
      // console.log(index)
      this.currentIndex = index
      this.$refs.indexWrap.scrollTop = this.listHeight[index];
      console.log(this.currentIndex)
      console.log(this.listHeight[index])
      console.log(this.$refs.indexWrap.scrollTop)
    },
    clickItem(item) {
      this.$emit('choose', item)
    },
    onListWrapScroll(e) {
      clearTimeout(this.scrollTimer)
      this.scrollTimer = setTimeout(() => {
        let scrollTop = this.$refs.indexWrap.scrollTop
        console.log(scrollTop)
        const listHeight = this.listHeight
        for (let i = 0; i < listHeight.length - 1; i++) {
          if (
            scrollTop <= listHeight[i + 1] - TITLE_HEIGHT &&
            scrollTop >= listHeight[i]
          ) {
            this.currentIndex = i
            return
          }
        }
      }, 20)
    }
  },
  destroyed() {
    clearTimeout(this.timer)
    clearTimeout(this.scrollTimer)
  }
}
</script>

<style lang="stylus" scoped>
.index-list
  position absolute
  width 100%
  height 100%
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
    .nav-item
      padding 0.3rem
      font-size 1.2rem
      color blue
      list-style none
      &.active
        color #ffcd32



  .index-indicator
    position absolute
    width 5rem
    height 5rem
    top 50%
    left 50%
    transform translate(-50%, -50%)
    text-align center
    line-height 5rem
    background rgba(0, 0, 0, 0.7)
    color #fff
    font-size 2.2rem
    border-radius 0.5rem
    pointer-events none


.fade-leave-active
  transition opacity 0.5s

.fade-enter,
.fade-leave-to
  opacity 0

</style>