<template>
  <div class="brand-car">
    <!-- 头部 -->
    <Header :title="title"></Header>
    <div class="brand-car-title">
      <img :src="titleImg" alt="">
      <span>{{brandCar.titleName}}</span>
    </div>
    <div class="brand-car-container">
      <div class="brand-type" v-for="(brandType,index) in brandCar.brandCars" :key="index">
        <span class="brand-type-title">{{brandType.title}}</span>
        <router-link to="/carDesc" class="brand-car-desc" v-for="(item,index) in brandType.items" :key="index">
            <img v-lazy="item.imgurl" alt="">
            <div class="brand-car-desc-text">
              <span class="name">{{item.name}}</span>
              <span class="price">{{item.price}}</span>
            </div>
        </router-link>
      </div>
    </div>
    <!-- 尾部 -->
    <Footer></Footer>
    <!-- 回到顶部 -->
    <ScrollToTop></ScrollToTop>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
import ScrollToTop from '@/components/scrollToTop'
export default {
  name:'brandCar',
  data() {
    return {
      title:'品牌选车',
      brandCar:{},
      titleImg:'http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_8_100.png',
      titleName:'大众',
      brandCars:[
          {
            "title": "上汽大众",
            "items":[
              {
                "name": "上汽大众T-Cross",
                "imgurl": "http://img2.bitautoimg.com/autoalbum/files/20190314/804/0324388049_3.png",
                "price": "12.79-15.99万"
              },
              {
                "name": "途岳",
                "imgurl": "http://img2.bitautoimg.com/autoalbum/files/20190114/700/0426047002_3.png",
                "price": "16.58-22.38万"
              },
              {
                "name": "途观",
                "imgurl": "http://img1.bitautoimg.com/autoalbum/files/20181213/999/0143029995_3.jpg",
                "price": "19.48-23.18万"
              },
              {
                "name": "途观L",
                "imgurl": "http://img4.bitautoimg.com/autoalbum/files/20190104/175/0310091757_3.png",
                "price": "21.88-35.08万"
              },
              {
                "name": "途昂",
                "imgurl": "http://img3.bitautoimg.com/autoalbum/files/20190102/298/0407052987_3.png",
                "price": "30.09-50.59万"
              },
              {
                "name": "途昂X",
                "imgurl": "http://img1.bitautoimg.com/autoalbum/files/20190416/056/1215330566_3.jpg",
                "price": "31.69-48.89万"
              },
              {
                "name": "POLO",
                "imgurl": "http://img1.bitautoimg.com/autoalbum/files/20190624/639/0943156395_3.jpg",
                "price": "7.79-14.39万"
              },
              {
                "name": "桑塔纳",
                "imgurl": "http://img4.bitautoimg.com/autoalbum/files/20190102/343/0954043434_3.png",
                "price": "8.69-12.99万"
              },
              {
                "name": "朗逸",
                "imgurl": "http://img3.bitautoimg.com/autoalbum/files/20180802/130/0457211308_3.png",
                "price": "10.79-16.19万"
              },
              {
                "name": "朗行",
                "imgurl": "http://img1.bitautoimg.com/autoalbum/files/20181010/709/0506487095_3.png",
                "price": "11.29-16.29万"
              },
              {
                "name": "朗境",
                "imgurl": "http://img2.bitautoimg.com/autoalbum/files/20180810/829/0316478298_3.png",
                "price": "14.89-17.19万"
              },
              {
                "name": "凌渡",
                "imgurl": "http://img1.bitautoimg.com/autoalbum/files/20190102/771/0331377716_3.png",
                "price": "14.29-19.69万"
              },
              {
                "name": "帕萨特",
                "imgurl": "http://img1.bitautoimg.com/autoalbum/files/20190122/686/0929086865_3.png",
                "price": "18.49-28.29万"
              },
              {
                "name": "辉昂",
                "imgurl": "http://img2.bitautoimg.com/autoalbum/files/20190102/382/0958523823_3.png",
                "price": "34-63.9万"
              },
              {
                "name": "途安L",
                "imgurl": "http://img2.bitautoimg.com/autoalbum/files/20190102/868/0957468688_3.png",
                "price": "15.18-19.48万"
              },
              {
                "name": "途安",
                "imgurl": "http://img2.bitautoimg.com/autoalbum/files/20120306/370/0502323700_3.jpg",
                "price": "停售"
              },
              {
                "name": "高尔",
                "imgurl": "http://img1.bitautoimg.com/autoalbum/files/20190528/930/0610219304_3.jpg",
                "price": "停售"
              }
            ]
          },
          {
            "title": "上汽大众新能源",
            "items": [
              {
                "name": "途观L PHEV",
                "imgurl": "http://img4.bitautoimg.com/autoalbum/files/20180927/073/0409530731_3.png",
                "price": "31.58-32.58万"
              },
              {
                "name": "朗逸电动版",
                "imgurl": "http://img2.bitautoimg.com/autoalbum/files/20190326/692/0551096920_3.png",
                "price": "未上市"
              },
              {
                "name": "帕萨特PHEV",
                "imgurl": "http://img3.bitautoimg.com/autoalbum/files/20190122/077/0932250776_3.png",
                "price": "27.69-28.69万"
              }
            ]
          },
          {
            "title": "一汽大众",
            "items": [
              {
                "name": "探歌",
                "imgurl": "http://img4.bitautoimg.com/autoalbum/files/20190102/642/1013046423_3.png",
                "price": "13.58-20.38万"
              },
              {
                "name": "探岳",
                "imgurl": "http://img2.bitautoimg.com/autoalbum/files/20180911/817/0556248173_3.png",
                "price": "18.59-31.39万"
              },
              {
                "name": "捷达",
                "imgurl": "http://img4.bitautoimg.com/autoalbum/files/20190110/051/0518340510_3.jpg",
                "price": "7.98-10.68万"
              },
              {
                "name": "宝来",
                "imgurl": "http://img2.bitautoimg.com/autoalbum/files/20190102/242/0319542422_3.png",
                "price": "9.88-15.98万"
              },
              {
                "name": "高尔夫",
                "imgurl": "http://img2.bitautoimg.com/autoalbum/files/20180802/560/0312155601_3.jpg",
                "price": "11.92-23.42万"
              },
              {
                "name": "高尔夫·嘉旅",
                "imgurl": "http://img3.bitautoimg.com/autoalbum/files/20190114/038/0417080388_3.png",
                "price": "12.88-19.28万"
              },
              {
                "name": "蔚领",
                "imgurl": "http://img3.bitautoimg.com/autoalbum/files/20181015/661/0702536610_3.png",
                "price": "11.39-15.89万"
              },
              {
                "name": "速腾",
                "imgurl": "http://img2.bitautoimg.com/autoalbum/files/20190122/561/1056225614_3.png",
                "price": "12.88-21.88万"
              },
              {
                "name": "迈腾",
                "imgurl": "http://img2.bitautoimg.com/autoalbum/files/20180802/340/1126383400_3.png",
                "price": "18.61-30.91万"
              },
              {
                "name": "大众CC",
                "imgurl": "http://img1.bitautoimg.com/autoalbum/files/20190102/268/0322402685_3.png",
                "price": "24.68-30.18万"
              },
              {
                "name": "开迪",
                "imgurl": "http://img1.bitautoimg.com/autoalbum/files/20190531/543/0236285439_3.png",
                "price": "停售"
              }
            ]
          },
          {
            "title": "一汽大众新能源",
            "items": [
              {
                "name": "探岳 插电混动",
                "imgurl": "http://img3.bitautoimg.com/autoalbum/files/20190528/691/0617426911_3.jpg",
                "price": "未上市"
              },
              {
                "name": "高尔夫·纯电",
                "imgurl": "http://img2.bitautoimg.com/autoalbum/files/20190322/261/0301332617_3.png",
                "price": "未上市"
              },
              {
                "name": "宝来·纯电",
                "imgurl": "http://img4.bitautoimg.com/autoalbum/files/20190322/458/0327234589_3.png",
                "price": "未上市"
              },
              {
                "name": "迈腾 插电混动",
                "imgurl": "http://img2.bitautoimg.com/autoalbum/files/20190528/503/0617275031_3.jpg",
                "price": "未上市"
              }
            ]
          },
          {
            "title": "进口大众",
            "items": [
              {
                "name": "T-Cross(进口)",
                "imgurl": "http://img1.bitautoimg.com/autoalbum/files/20190611/997/1122149973_3.jpg",
                "price": "未上市"
              },
              {
                "name": "Tiguan",
                "imgurl": "http://img1.bitautoimg.com/autoalbum/files/20180802/160/0459231608_3.png",
                "price": "23.98-35.08万"
              },
              {
                "name": "途锐",
                "imgurl": "http://img3.bitautoimg.com/autoalbum/files/20180911/623/0542406239_3.png",
                "price": "56.98-81.98万"
              },
              {
                "name": "POLO(海外)",
                "imgurl": "http://img4.bitautoimg.com/autoalbum/files/20190624/498/0943064989_3.jpg",
                "price": "未上市"
              },
              {
                "name": "高尔夫(进口)",
                "imgurl": "http://img3.bitautoimg.com/autoalbum/files/20190322/481/0305294819_3.png",
                "price": "20.98-37.28万"
              },
              {
                "name": "甲壳虫",
                "imgurl": "http://img2.bitautoimg.com/autoalbum/files/20180802/414/1155234146_3.png",
                "price": "17.88-25.58万"
              },
              {
                "name": "蔚揽",
                "imgurl": "http://img2.bitautoimg.com/autoalbum/files/20181010/893/0543208937_3.png",
                "price": "24.38-39.28万"
              },
              {
                "name": "夏朗",
                "imgurl": "http://img1.bitautoimg.com/autoalbum/files/20180802/637/1155526374_3.png",
                "price": "24.68-34.38万"
              },
              {
                "name": "迈特威",
                "imgurl": "http://img1.bitautoimg.com/autoalbum/files/20190305/656/0517366561_3.png",
                "price": "38.2-52.6万"
              },
              {
                "name": "凯路威",
                "imgurl": "http://img2.bitautoimg.com/autoalbum/files/20180810/466/1203504668_3.png",
                "price": "32.05-38.2万"
              },
              {
                "name": "尚酷",
                "imgurl": "http://img2.bitautoimg.com/autoalbum/files/20141017/013/0356220133_3.jpg",
                "price": "停售"
              },
              {
                "name": "辉腾",
                "imgurl": "http://img4.bitautoimg.com/autoalbum/files/20160307/151/0523481515_3.jpg",
                "price": "停售"
              },
              {
                "name": "大众UP!",
                "imgurl": "http://img2.bitautoimg.com/autoalbum/files/20110909/125/0500541253_3.jpg",
                "price": "停售"
              },
              {
                "name": "Eos",
                "imgurl": "http://img1.bitautoimg.com/autoalbum/files/20120305/041/0501230418_3.jpg",
                "price": "停售"
              },
              {
                "name": "迈腾(进口)",
                "imgurl": "http://img3.bitautoimg.com/autoalbum/files/20120401/169/0727271690_3.jpg",
                "price": "停售"
              },
              {
                "name": "大众CC(进口)",
                "imgurl": "http://img2.bitautoimg.com/autoalbum/files/20120305/120/0457431200_3.jpg",
                "price": "停售"
              },
              {
                "name": "Amarok",
                "imgurl": "http://img3.bitautoimg.com/autoalbum/files/20141021/449/0246454490_3.jpg",
                "price": "停售"
              }
            ]
          },
          {
            "title": "进口大众新能源",
            "items": [
              {
                "name": "途锐 插电混动",
                "imgurl": "http://img4.bitautoimg.com/autoalbum/files/20190528/026/0617560266_3.jpg",
                "price": "未上市"
              },
              {
                "name": "大众ID.3",
                "imgurl": "http://img3.bitautoimg.com/autoalbum/files/20190529/748/0602197488_3.jpg",
                "price": "未上市"
              },
              {
                "name": "高尔夫 纯电动",
                "imgurl": "http://img2.bitautoimg.com/autoalbum/files/20181010/190/0728481902_3.png",
                "price": "24.08万"
              },
              {
                "name": "蔚揽 插电混动",
                "imgurl": "http://img1.bitautoimg.com/autoalbum/files/20181218/969/1159409695_3.png",
                "price": "30.18万"
              },
              {
                "name": "高尔夫 插电混动",
                "imgurl": "http://img4.bitautoimg.com/autoalbum/files/20181010/875/0721228754_3.png",
                "price": "停售"
              }
            ]
          }
        ]
    }
  },
  components: {
    Header,
    Footer,
    ScrollToTop
  },
  created() {
    this.$http.get('https://www.easy-mock.com/mock/5d156ff297fe7161eff463c1/example_copy/Bitauto/brandCar')
    .then(res => {
      this.brandCar = res.data.data
      console.log(this.brandCar)
    })
  }
}
</script>

<style lang="stylus" scoped>
.brand-car
  width 100%
  // overflow-y scroll
  height 100%
  .brand-car-title
    width 100%
    display flex
    padding 0.8rem 1rem
    align-items center
    img
      width 15%
      margin-right 1rem
    span
      font-size 1.8rem
  .brand-car-container
    width 100%
    .brand-type
      width 100%
      .brand-type-title
        width 100%
        padding-left 1rem
        display block
        height 3.3rem
        line-height 3.3rem
        background #F8F8F8
        color #999
        font-size 1.4rem
      .brand-car-desc
        display flex
        padding 1.5rem 1rem
        align-items center
        border-bottom 0.1rem solid #E9E9E9
        &:last-child
          border-bottom 0rem solid #E9E9E9
        img
          width 9rem
          margin-right 1rem
        .brand-car-desc-text
          display flex
          flex-direction column
          .name
            font-size 1.8rem
            color #333
          .price
            color #c00

</style>

