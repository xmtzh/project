<template>
  <div class="userInfo">
    <Header :title="title" />
    <div class="header">
        <!-- 头像 -->
      <div class="avatar">
        <img class="msgImg" src="../images/xiaoxi.png" alt="">
        <img class="userImg" src="http://image.bitautoimg.com/uimg/mbt2016/images/ico_header_logout.png" alt="">
      </div>
      <!-- 个人信息及等级 -->
      <div class="userMsg">
        <span class="name">{{nickName}}</span>
        <span class="grade">{{grade}}</span>
        <span>关注{{follow}} <i>|</i> 粉丝{{fans}} <i>|</i> 社区{{community}}</span>
      </div>
      <div class="menu">
        <router-link class="menuOne" to="#" v-for="(item,index) in userChoice" :key="index">
          <img :src="item.img" alt="">
          <span>{{item.title}}</span>
        </router-link>
      </div>
      <div class="link-authen">
        <router-link to="#" class="link">
          <img class="daV" src="../images/V.png" alt="">
          <span>去认证车主、汽车从业者、机构等</span>
          <img class="right" src="../images/right.png" alt="">
        </router-link>
      </div>
    </div>
    <div class="myid">
      <span>我的易车号</span>
      <router-link to="#" class="myid-more">
        <span>更多</span>
        <img src="../images/right.png" alt="">
      </router-link>
    </div>
    <div class="center-container">
      <img src="../images/car.png" alt="">
      <div class="text">
        <span class="mycar">添加我的爱车</span>
        <span>保存服务信息，用车服务更快捷、精准！</span>
      </div>
    </div>
    <div class="user-function">
      <router-link to="#" class="user-func-one" v-for="(item,index) in userFunc" :key="index">
        <img :src="item.img" alt="">
        <span>{{item.title}}</span>
      </router-link>
    </div>
    <div class="myid">
      <span>关注的车</span>
      <router-link to="#" class="myid-more">
        <span>添加</span>
        <img src="../images/right.png" alt="">
      </router-link>
    </div>

    <div class="login-out" @click="loginOut">
      <span>退出当前账号</span>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
export default {
  name:'userInfo',
  data() {
    return {
      title:'个人主页',
      nickName:'云深归处',
      grade:'幼儿园',
      follow:1,
      fans:0,
      community:0,
      userChoice:[
        {title:'我的社区',img:require('../images/user-choice/shequ.png')},
        {title:'我的视频',img:require('../images/user-choice/shipin.png')},
        {title:'我的商城',img:require('../images/user-choice/shop.png')},
        {title:'我的问答',img:require('../images/user-choice/wenda.png')},
      ],
      userFunc:[
        {title:'我的车库',img:require('../images/user-function/cheku.png')},
        {title:'我的设置',img:require('../images/user-function/shezhi.png')},
        {title:'易车币攻略',img:require('../images/user-function/gonglue.png')},
        {title:'我的红包',img:require('../images/user-function/hongbao.png')},
        {title:'我的勋章',img:require('../images/user-function/xunzhang.png')},
        {title:'我的好友',img:require('../images/user-function/haoyou.png')},
        {title:'我的易车惠',img:require('../images/user-function/liwu.png')},
        {title:'我的养护',img:require('../images/user-function/yanghu.png')},
        {title:'我的收藏',img:require('../images/user-function/shoucang.png')},
        {title:'我的口碑',img:require('../images/user-function/koubei.png')},
        {title:'我的作品',img:require('../images/user-function/zuopin.png')},
        {title:'我的易车号',img:require('../images/user-function/yiche.png')}
      ]
    }
  },
  components: {
    Header,
    Footer
  },
  methods: {
    // 退出按钮
    loginOut() {
      this.$store.dispatch('UserLogout')
      this.$messageS('已退出登录')
      setTimeout(()=>{
        this.$router.push({path:'/login'})
      },1000)
    }
  }
}
</script>

<style lang="stylus" scoped>
.userInfo
  width 100%
  background-color #f5f7fb
  .header
    width 100%
    background-color #fff
    .avatar
      width 100%
      height 8.3rem
      background-image url('http://image.bitautoimg.com/uimg/m-gerenzhongxin2017/bg_personal_bg@2x.png')
      background-repeat no-repeat
      background-size contain
      position relative
      margin-bottom 3rem
      .msgImg
        width 2.5rem
        position absolute
        right 1.3rem
        top 1.3rem
      .userImg
        width 7rem
        height 7rem
        border 0.3rem solid #fff
        border-radius 50px
        position absolute
        left 50%
        transform translate(-50%)
        bottom -2rem
    .userMsg
      width 100%
      display flex
      flex-direction column
      align-items center
      .name
        font-weight bolder
        font-size 1.8rem
        color #000
      .grade
        margin 0.5rem 0
        border 1px solid #508CEE
        color #508CEE
        border-radius 1rem
        padding 0 0.5rem
        box-sizing border-box
        font-size 1.1rem
      i
        color #ebebeb
        margin 0 1rem
    .menu
      width 100%
      display flex
      padding 3rem 0.5rem
      box-sizing border-box
      .menuOne
        width 25%
        display flex
        flex-direction column
        align-items center
        img
          width 2.6rem
          margin-bottom 0.5rem
    .link-authen
      width 90%
      position relative
      margin 0 5%
      padding 1.5rem 0
      border-top 0.1rem solid #EAEEF5
      .link
        width 100%
        display flex
        align-items center
        .daV
          width 1rem
          height 1.5rem
          margin-right 0.5rem
        span
          font-size 1.5rem
        .right
          width 1.2rem
          position absolute
          right 0
  .myid
    width 100%
    padding 1.3rem 1.5rem
    background-color #fff
    margin 1rem 0
    display flex
    justify-content space-between
    span
      font-weight bolder
      font-size 1.6rem
      color #000
    .myid-more
      display flex
      align-items center
      img
        width 1.5rem
        height 1.5rem
      span
        font-weight normal
        font-size 1.4rem
        color #999
  .center-container
    width 100%
    padding 2rem 1.5rem
    background-color #fff
    margin 1rem 0
    display flex
    img
      width 2rem
      height 2rem
      margin-right 1rem
    .text
      display flex
      flex-direction column
      font-size 1.5rem
      color #999
      span
        margin-bottom 0.5rem
      .mycar
        color #000
  .user-function
    width 100%
    display flex
    flex-wrap: wrap
    background-color #fff
    .user-func-one
      width 33%
      border-right 0.1rem solid #f5f7fb
      border-bottom 0.1rem solid #f5f7fb
      display flex
      flex-direction column
      align-items center
      padding 1.5rem 0
      img
        width 2.5rem
        height 2.5rem
        margin-bottom 1rem
      span
        font-size 1.4rem
  .login-out
    width 100%
    text-align center
    background-color #fff
    padding 1.5rem 0
    color #f05550
    font-size 1.5rem


</style>

