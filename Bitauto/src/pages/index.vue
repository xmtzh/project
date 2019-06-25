<template>
  <div class="index">
    <!-- 头部 -->
    <div class="header">
      <router-link to="#" class="logo">
        <img class="logoImg" src="http://image.bitautoimg.com/uimg/mbt2018/images/logo1809.png" alt="">
      </router-link>
      <router-link to="#" class="login">
        <img class="loginImg" src="http://image.bitautoimg.com/uimg/mbt2016/images/ico_header_logout.png" alt="">
      </router-link>
      <router-link to="#" class="active">
        <img src="http://image.bitautoimg.com/bitauto/2019/06/03/d3d9d316-0ec8-43cb-af51-297359aed46c_630_w0.png" alt="">
      </router-link>
    </div>
    <!-- 导航 -->
    <div class="navbar">
      <ul>
        <li v-for="(item,index) in navbar" :key="index">
          <router-link class="navText" to="#">{{item}}</router-link>
        </li>
      </ul>
      <div class="right-opc"></div>
    </div>
    <!-- 最近看过 -->
    <div class="recently">
      <RecentlyLook></RecentlyLook>
    </div>
    <!-- 搜索栏 -->
    <div class="search">
      <input class="inputSearch" type="search" v-model="searchName" placeholder="输入您想要的车名">
      <div class="serachBtn">
        <img src="../images/searchBtn.png" alt="">
      </div>
    </div>
    <!-- 条件搜车tabbar -->
    <div class="search-car-tabbar">
      <Tabs value="name1">
        <Tab-pane label="按品牌" name="name1" >
          <router-link class="brand" to="#" v-for="(item,index) in tabbarContainer1" :key="index" >
            <img :src="item.image" alt="">
            <p>{{item.text}}</p>
          </router-link>
          <router-link class="brand" to="/allCars">
            <img src="../images/more.png" alt="">
            <p>更多</p>
          </router-link>
        </Tab-pane>
        <Tab-pane label="按条件" name="name2">
          <router-link class="condition" to="#" v-for="(item,index) in tabbarContainer2" :key="index">
            <p>{{item.text}}</p>
          </router-link>
          <router-link class="condition" to="#">
            <p>更多>></p>
          </router-link>
        </Tab-pane>
        <Tab-pane label="热门车" name="name3">
          <router-link class="hot-car" to="#" v-for="(item,index) in tabbarContainer3" :key="index" >
            <img :src="item.image" alt="">
            <p>{{item.text}}</p>
          </router-link>
        </Tab-pane>
        <Tab-pane label="新能源" name="name4">
          <router-link class="newPower" to="#" v-for="(item,index) in tabbarContainer4" :key="index" >
            <img :src="item.image" alt="">
            <p>{{item.text}}</p>
          </router-link>
          <router-link class="newPower" to="#">
            <img src="../images/more.png" alt="" style="width:45%">
            <p>更多</p>
          </router-link>
        </Tab-pane>
        <Tab-pane label="二手车" name="name5">
          <router-link class="used-car-a" to="#" v-for="(item,index) in tabbarContainer5a" :key="index" >
            <img :src="item.image" alt="">
            <p>{{item.text}}</p>
          </router-link>
          <router-link class="used-car-b" to="#" v-for="(item,index) in tabbarContainer5b" :key="index" >
            <p>{{item.text}}</p>
          </router-link>
        </Tab-pane>
      </Tabs>
    </div>
    <!-- 轮播图 -->
    <div class="wrapper">
        <swiper :options="swiperOption" >
            <swiper-slide v-for='item of swiperList' :key="item.id">
                <img :src="item.imgUrl" class="swiper-img">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
    <!-- 四方格 -->
    <div class="tuwen">
      <router-link class="tuwen-one" to="#" v-for="(item,index) in tuwenInfo" :key="index">
        <img :src="item.img" alt="">
        <div class="tuwen-text">
          <span class="tuwen-text-title">{{item.title}}</span>
          <span class="tuwen-text-desc">{{item.desc}}</span>
        </div>
      </router-link>
    </div>
    <!-- 买车活动 -->
    <div class="buy-car-active">
      <router-link class="buy-car-active-one" to="#" >
        <div class="imgBox" style="backgroundColor:#fc6964">
          <img src="../images/liwu.png" alt="">
        </div>
        <p>优惠购车</p>
      </router-link>
      <router-link class="buy-car-active-one" to="#" >
        <div class="imgBox" style="backgroundColor:#fdb63b">
          <img src="../images/naozhong.png" alt="">
        </div>
        <p>商家特卖</p>
      </router-link>
      <router-link class="buy-car-active-one" to="#">
        <div class="imgBox" style="backgroundColor:#9794fd">
          <img src="../images/card.png" alt="">
        </div>
        <p>贷款买车</p>
      </router-link>
      <router-link class="buy-car-active-one" to="#">
        <div class="imgBox" style="backgroundColor:#5d9ef8">
          <img src="../images/zhong.png" alt="">
        </div>
        <p>易车众筹</p>
      </router-link>
      <router-link class="buy-car-active-one" to="#">
        <div class="imgBox" style="backgroundColor:#60d4e1">
          <img src="../images/maiche.png" alt="">
        </div>
        <p>高价卖车</p>
      </router-link>
    </div>
    <!-- 猜你喜欢 -->
    <div class="like-title">
      <h3>猜你喜欢</h3>
      <router-link class="title-right" to="#">
        <img src="../images/update.png" alt="">
        <p>换一换</p>
      </router-link>
    </div>
    <div class="like-container">
      <ul>
        <li v-for="(item,index) in likeContainer" :key="index">
          <router-link to="#" >
            <img :src="item.image" alt="">
            <h4>{{item.name}}</h4>
            <p>{{item.price}}</p>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 新闻导航 -->
    <div class="news-nav">
      <mt-navbar v-model="selected" class="mtnavbar">
        <mt-tab-item v-for="(item,index) in mtnavbar" :key="index" :id="item.id" class="bar">{{item.content}}</mt-tab-item>
      </mt-navbar>
      <!-- tab-container -->
      <mt-tab-container v-model="selected" class="mttabcontainer">
        <mt-tab-container-item id="1">
          <newsBox></newsBox>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell v-for="(n,i) in one" :key="i" :title="'测试 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <mt-cell v-for="(n,i) in one" :key="i" :title="'选项 ' + n" />
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <!-- 底部组件 -->
    <Footer></Footer>
  </div>
</template>

<script>
import newsBox from '@/components/newsBox'
import RecentlyLook from '@/components/recentlyLook'
import Footer from '@/components/footer'

export default {
  name:'index',
  data() {
    return {
      navbar:[
        '选车',
        '易车号',
        '报价',
        '经销商',
        '裸车价',
        '新能源',
        '社区',
        '视频'
      ],
      searchName:'',
      // 条件搜车tabbar里的内容
      tabbarContainer1:[
        {
          image:'http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_8_100.png',
          text:'大众'
        },
        {
          image:'http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_127_100.png',
          text:'别克'
        },
        {
          image:'http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_136_100.png',
          text:'长安'
        },
        {
          image:'http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_30_100.png',
          text:'日产'
        },
        {
          image:'http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_34_100.png',
          text:'吉利'
        },
        {
          image:'http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_9_100.png',
          text:'奥迪'
        },
        {
          image:'http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_7_100.png',
          text:'丰田'
        },
        {
          image:'http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_26_100.png',
          text:'本田'
        },
        {
          image:'http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_49_100.png',
          text:'雪佛兰'
        }
      ],
      tabbarContainer2:[
        {
          text:'8万以下'
        },
        {
          text:'8-12万'
        },
        {
          text:'12-18万'
        },
        {
          text:'18-25万'
        },
        {
          text:'SUV'
        },
        {
          text:'紧凑型'
        },
        {
          text:'中型车'
        },
        {
          text:'MPV'
        }
      ],
      tabbarContainer3:[
        {
          image:'https://dd.yiche.com/inner-dsp-public/fc3999f560e1d16f97ae88e292923a4a.png',
          text:'柯迪亚克'
        },
        {
          image:'https://dd.yiche.com/inner-dsp-public/cb40206852848bf9e1ba3b5106f3b431.jpg',
          text:'Aion S'
        },
        {
          image:'https://dd.yiche.com/inner-dsp-public/702342e2fcbb34d4653eff3fd0a2657c.png',
          text:'欧蓝德'
        },

        {
          image:'http://img3.bitautoimg.com/autoalbum/files/20140618/071/0333060718_1.jpg',
          text:'卡罗拉'
        },
        {
          image:'http://img2.bitautoimg.com/autoalbum/files/20160721/096/0417030965_1.jpg',
          text:'途观'
        },
        {
          image:'http://img2.bitautoimg.com/autoalbum/files/20160518/413/0243074133_1.jpg',
          text:'速腾'
        },
        {
          image:'http://img2.bitautoimg.com/autoalbum/files/20190102/831/0357438317_3.png',
          text:'昂科拉'
        },
        {
          image:'http://img4.bitautoimg.com/autoalbum/files/20180802/151/0503261510_3.png',
          text:'凯越'
        },
      ],
      tabbarContainer4:[
        {
          image:'https://dd.yiche.com/inner-dsp-public/fc3999f560e1d16f97ae88e292923a4a.png',
          text:'柯迪亚克'
        },
        {
          image:'https://dd.yiche.com/inner-dsp-public/cb40206852848bf9e1ba3b5106f3b431.jpg',
          text:'Aion S'
        },
        {
          image:'https://dd.yiche.com/inner-dsp-public/702342e2fcbb34d4653eff3fd0a2657c.png',
          text:'欧蓝德'
        },

        {
          image:'http://img3.bitautoimg.com/autoalbum/files/20140618/071/0333060718_1.jpg',
          text:'卡罗拉'
        },
        {
          image:'http://img2.bitautoimg.com/autoalbum/files/20160721/096/0417030965_1.jpg',
          text:'途观'
        },
        {
          image:'http://img2.bitautoimg.com/autoalbum/files/20160518/413/0243074133_1.jpg',
          text:'速腾'
        },
        {
          image:'http://img2.bitautoimg.com/autoalbum/files/20190102/831/0357438317_3.png',
          text:'昂科拉'
        },
      ],
      tabbarContainer5a:[
        {
          image:'http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_8_100.png',
          text:'大众'
        },
        {
          image:'http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_9_100.png',
          text:'奥迪'
        },
        {
          image:'http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_7_100.png',
          text:'丰田'
        },
        {
          image:'http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_26_100.png',
          text:'本田'
        },
      ],
      tabbarContainer5b:[
        {
          text:'5万以下'
        },
        {
          text:'5-10万'
        },
        {
          text:'10-15万'
        },
        {
          text:'15万以上'
        },
        {
          text:'淘宝认证'
        },
        {
          text:'准新车'
        },
        {
          text:'练手车'
        },
        {
          text:'SUV'
        }
      ],
      // 轮播设置
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 2000,
        speed:1000
      },
      // 轮播图片
      swiperList:[
        {
          id:"0001",
          imgUrl:"https://dd.yiche.com/inner-dsp-public/c4df1169251a447b3d6bfea7c9634812.jpg"
        },
        {
          id:"0002",
          imgUrl:"http://img1.bitautoimg.com/bitauto/2019/06/19/cbfd947d-6732-4a98-822a-32552463c249.jpg"
        },
        {
          id:"0003",
          imgUrl:"http://img1.bitautoimg.com/bitauto/2019/06/19/14e80b31-fef8-4efc-8652-48ff7c978073.jpg"
        },
        {
          id:"0004",
          imgUrl:"http://image.bitautoimg.com/bitauto/2019/06/17/e1a61ff0-4cfd-4a06-9a24-da5a6f0393ee.jpg"
        },
        {
          id:"0005",
          imgUrl:"https://dd.yiche.com/inner-dsp-public/cc88b1d209e18e321bc437aec5e3a77d.jpg"
        },
        {
          id:"0006",
          imgUrl:"https://dd.yiche.com/inner-dsp-public/48e53e2acfc1be2a778b35664590869d.jpg"
        },
        {
          id:"0007",
          imgUrl:"https://dd.yiche.com/inner-dsp-public/8188ce238868ad65289b455fb34b9ea4.jpg"
        },
      ],
      // 四方个格图文数据1
      tuwenInfo:[
        {
          img:'http://img2.bitautoimg.com/bitauto/2018/02/06/92e801c6-e564-4f97-8446-9d6f2bac760a.jpg',
          title:'一成首付',
          desc:'新车开走吧'
        },
        {
          img:'http://img2.bitautoimg.com/bitauto/2017/06/29/96a5da43-e5df-4969-9052-1b10693dc542.jpg',
          title:'帮你买车',
          desc:'低价买车不吃亏'
        },
        {
          img:'http://image.bitautoimg.com/bitauto/2018/02/06/994612f9-a8d6-45bb-85c4-89ba6e28f19a.jpg',
          title:'新能源',
          desc:'挑款合适电动车'
        },
        {
          img:'http://img2.baa.bitautotech.com/usergroup/editor_pic/2018/5/25/8fa7777edbf44dd98144df072e9a7fad.jpg',
          title:'买车神器',
          desc:'真实价格发票为证'
        }
      ],
      // 猜你喜欢数据
      likeContainer:[
        {
          image:'http://img1.bitautoimg.com/newsimg_300x200/autoalbum/files/20180810/601/0353126012_3.png',
          name:'凯迪拉克XT5',
          price:'32.97万起'
        },
        {
          image:'http://img2.bitautoimg.com/newsimg_300x200/autoalbum/files/20190225/746/1144237461_6.jpg',
          name:'航海家',
          price:'38.88万起'
        },
        {
          image:'http://img4.bitautoimg.com/newsimg_300x200/autoalbum/files/20181213/783/0130137839_6.jpg',
          name:'沃尔沃XC60',
          price:'36.29万起'
        },
        {
          image:'http://img1.bitautoimg.com/newsimg_300x200/autoalbum/files/20181218/039/0536540398_3.png',
          name:'宝马X3',
          price:'38.98万起'
        },
      ],
      // 新闻数据
      one:[
        1,2,3
      ],
      selected:"1",
      mtnavbar:[
        {
          id:'1',
          content:'推荐'
        },
        {
          id:'2',
          content:'易车号'
        },
        {
          id:'3',
          content:'视频'
        },
        {
          id:'4',
          content:'热帖'
        },
        {
          id:'5',
          content:'新车'
        },
        {
          id:'6',
          content:'降价'
        },
        {
          id:'7',
          content:'测评'
        },
        {
          id:'8',
          content:'导购'
        }
      ],

    }
  },
  components:{
    newsBox,
    RecentlyLook,
    Footer
  }
}
</script>

<style lang="stylus">
.index
  background-color #f5f7fb
.header
  height 5rem
  background-color #fff
  .logo img
    width 8.6rem
    height 3.3rem
    float left
    margin 1rem 0 0 1rem
  .login
    width 3.2rem
    height 3.2rem
    padding 0.2rem
    margin 0.6rem 1.5rem 0 0
    border 0.1rem solid #C0D9D9
    border-radius 50%
    float right
    .loginImg
      width 100%
      border-radius 50%
  .active img
    width 10rem
    margin 0.5rem 0.5rem 0 0
    float right
.navbar
  height 4.4rem
  line-height 4.4rem
  background-color #3677E0
  overflow hidden
  overflow-x scroll
  ul
    white-space nowrap
    li
      padding 0 1.5rem
      .navText
        color #ffffff
        font-size 1.6rem
  .right-opc
    width 2rem
    height 4.4rem
    position absolute
    background linear-gradient(to left, rgba(54,119,224,1),rgba(54,119,224,0))
    top 5rem
    right 0
.recently
  background-color #fff
.search
  padding 0 2rem
  position relative
  background-color #fff
  .inputSearch
    display inline-block
    width 85%
    height 4rem
    border 0.1rem solid #cae3ff
    box-sizing border-box
    border-top-left-radius 5rem
    border-bottom-left-radius 5rem
    padding-left 2rem
  .serachBtn
    position absolute
    top 0
    left 85%
    transform translate(-50%)
    width 15%
    height 4rem
    background-color #3677E0
    border-top-right-radius 5rem
    border-bottom-right-radius 5rem
    padding 1rem
    box-sizing border-box
    cursor pointer
    img
      width 2rem
      position absolute
      left 50%
      transform translate(-50%)
.search-car-tabbar
  padding 1rem 2rem
  width 100%
  box-sizing border-box
  background-color #fff
  // background-color #3677E0
  .ivu-tabs-nav
    width 100%
    .ivu-tabs-nav-prev,.ivu-tabs-nav-next
      display none
    .ivu-tabs-tab
      width 20%
      padding 0.8rem 0.8rem
      box-sizing border-box
      text-align center
      margin 0
      &:hover
        color #3677E0
    .ivu-tabs-ink-bar
      width 20% !important
      display none
  .ivu-tabs-nav .ivu-tabs-tab-focused
    font-weight bolder
  .brand
    width 20%
    float left
    text-align center
    margin-bottom 1rem
    color #666
    img
      width 60%
  .condition
    height 4.4rem
    line-height 4.4rem
    width 33.3%
    float left
    text-align center
    color #666
    font-size 1.6rem
  .hot-car
    width 25%
    float left
    text-align center
    color #666
    margin-bottom 1rem
    img
      width 70%
  .newPower
    width 25%
    float left
    text-align center
    color #666
    margin-bottom 1rem
    img
      width 70%
  .used-car-a
    width 25%
    float left
    justify-content center
    color #666
    position relative
    padding 0 1rem
    box-sizing border-box
    margin-bottom 1.8rem
    img
      width 50%
      display inline-block
      float left
      margin-right 0.5rem
    p
      position absolute
      top 50%
      transform translateY(-50%)
      float left
      display inline-block
  .used-car-b
    height 4.4rem
    line-height 4.4rem
    width 25%
    float left
    text-align center
    color #666
    font-size 1.4rem



.wrapper >>> .swiper-pagination-bullet-active
  background red
  width 0.5rem
  height 0.5rem
.wrapper >>> .swiper-pagination-bullet
  width 0.5rem
  height 0.5rem
.wrapper
    overflow: hidden
    width: 100%
    background-color #fff
    .swiper-img
      width: 100%
.tuwen
  padding 0 2rem
  width 100%
  box-sizing border-box
  background-color #fff
  overflow hidden
  .tuwen-one
    position relative
    width 50%
    display block
    float left
    border-bottom 0.1rem solid #f5f7fb
    box-sizing border-box
    &:nth-child(odd)
      border-right 0.1rem solid #f5f7fb
    img
      width 100%
      z-index 1
      display block
    .tuwen-text
      position absolute
      top 2rem
      left 1rem
      color #999
      font-size 1.2rem
      .tuwen-text-title
        display block
        color #000
        font-weight bolder
        font-size 1.6rem
.buy-car-active
  width 100%
  padding 2rem 2rem
  overflow hidden
  background-color #fff
  .buy-car-active-one
    width 20%
    float left
    text-align center
    .imgBox
      width 70%
      text-align center
      background-color pink
      padding 1rem
      margin 0 15% 0.5rem
      box-sizing border-box
      border-radius 50%
      img
        width 80%
        top 10%
    p
      color #666
.like-title
  width 100%
  padding 1rem 2rem
  position relative
  overflow hidden
  justify-content center
  margin-top 1rem
  background-color #fff
  h3
    float left
  img
    width 4%
    position absolute
    top 50%
    transform translateY(-50%)
    right 7rem
  p
    position absolute
    right 2rem
    top 50%
    font-size 1.4rem
    transform translateY(-50%)
.like-container
  padding 2rem 0 2rem 2rem
  background #FFF
  margin-bottom 1rem
  overflow hidden
  overflow-x scroll
  ul
    white-space nowrap
    li
      width 9rem
      display inline-block
      text-align center
      margin-right 1.5rem
      img
        width 100%
      h4
        color: #666
      p
        color: #ff8689
.news-nav
  width 100%
  background-color #fff
  padding 0 2rem
  .is-selected
    color #3677E0 !important
    font-weight bolder
  .mtnavbar
    white-space nowrap
    overflow hidden
    overflow-x scroll
    border-bottom 0.1rem solid #f5f7fb
    .bar
      display inline-block
      color #666
      margin 0 2rem
      height 5rem
      line-height 5rem
      // &:hover
      //   color #3677E0
      //   font-weight bolder
      //   border-bottom 0.2rem solid #3677E0
      .mint-tab-item-label
        font-size 1.6rem
  .mttabcontainer
    width 100%
    padding 2rem 0
    box-sizing border-box
    .mint-cell-wrapper
      background-image url('')



</style>

