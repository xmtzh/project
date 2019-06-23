<template>
  <div>
    <div class="recently-look" v-if="islook">
      最近看过:
      <ul>
        <li v-for="(item,index) in recentlyLook" :key="index">
          <router-link class="carName" to="#">{{item}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:'recentlyLook',
  data() {
    return{
      islook:true,
      // 从vuex中读取,最多不能超过x个,多余删除
      recentlyLook:[
        '凯迪拉克XT5',
        '昂科威',
        '马自达'
      ],
    }
  }
}
</script>

<style lang="stylus" scoped>
.recently-look
  padding 1rem 1rem
  font-size 1.2rem
  color #666666
  ul
    display inline-block
    li
      border 1px solid rgba(0,0,0,.1)
      border-radius 5rem
      padding 0.4rem 1rem
      margin 0 0.7rem
      .carName
        color #666666
</style>

