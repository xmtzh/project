<template>
  <!--transition标签 按钮出现附带动画-->
  <transition name="el-fade-in">
    <div class="page-component-up" @click="scrollToTop" v-show="toTopShow">
      <i class="el-icon-caret-top"></i>
    </div>
  </transition>
</template>

<script>
  export default {
    data() {
      return {
        toTopShow: false,
      }
    },
    methods: {
      handleScroll() {
        //首先修改相对滚动位置
        this.scrollTop = window.pageYOffset || document.body.scrollTop;
        if (this.scrollTop > 300) {
          this.toTopShow = true
        }else {
          this.toTopShow = false
        }
      },
      scrollToTop() {
        let timer = null, _that = this
        //动画，使用requestAnimationFrame代替setInterval
        cancelAnimationFrame(timer)
        timer = requestAnimationFrame(function fn() {
          if (_that.scrollTop > 0) {
            _that.scrollTop -= 50
            //然后修改这里实现动画滚动效果
            document.body.scrollTop = document.documentElement.scrollTop = _that.scrollTop
            timer = requestAnimationFrame(fn)
          } else {
            cancelAnimationFrame(timer);
            _that.toTopShow = false
          }
        })
      }
    },
    mounted() {
      this.$nextTick(function () {
         //修改事件监听   监听到页面滚动的变化
         window.addEventListener('scroll', () => {
          this.scrollTop = document.documentElement.scrollTop ||
                            window.pageYOffset ||
                            document.body.scrollTop;
          this.handleScroll()
        },true)

      });
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>
<style scoped lang="stylus">
.page-component-up
  background-color #409eff
  position fixed
  right 2rem
  bottom 6rem
  width 5rem
  height 5rem
  border-radius 50%
  cursor pointer
  transition .3s
  box-shadow 0 0.3rem 0.6rem rgba(0, 0, 0, .5)
  z-index 10000
  .el-icon-caret-top
    color #fff
    display block
    line-height 4rem
    text-align center
    font-size 3rem
  p
    display none
    text-align center
    color #fff
  &:hover
    opacity .8

</style>