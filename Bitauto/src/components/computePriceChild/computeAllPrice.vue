<template>
  <div class="computeAllPrice">
    <div class="top" v-if="toTopShow">
      <span>全款总价</span>
      <span>{{totalPrice}}元</span>
    </div>
    <div class="header">
      <div class="headerPrice">
        <span class="headerText">全款总价</span>
        <div class="totalPrice">
          <span class="totalPriceNum"><span>{{totalPrice}}</span>元</span>
          <span class="reBtn" @click="refresh">重置</span>
        </div>
        <div class="PriceDesc">
          <span class="nakedPrice one">裸车: <span>{{nakedPrice}}</span></span>
          <span class="NecessaryExp one">必要花费: <span>{{NecessaryExp}}</span></span>
          <span class="ComInsurance one">商业险: <span>{{ComInsurance}}</span></span>
        </div>
      </div>
      <div class="headerData">
        <div class="car data">
          <span class="text">选择车款</span>
          <span class="desc">{{carDesc}}</span>
        </div>
        <div class="price data">
          <span class="text">裸车价格</span>
          <span class="desc">{{nakedPrice}}</span>
        </div>
      </div>
    </div>
    <div class="containerOne">
      <div class="allPartPrice">
        <span>必要花费</span>
        <span>小计: {{NecessaryExp}}</span>
      </div>
      <div class="partDescPrice">
        <div class="everyPrice"
        v-for="(item,index) in PriceDesc"
        :key="index"
        @click="change(item.otherPrice,index,'PriceDesc')">
          <span>{{item.name}}</span>
          <span class="money">{{item.price}}</span>
          <img v-show="item.otherPrice" src="../../images/right.png" alt="">
        </div>
      </div>
    </div>
    <div class="containerTwo">
      <div class="allPartPrice">
        <span>商业保险</span>
        <span>小计: {{ComInsurance}}</span>
      </div>
      <div class="setMeal">
        <span>推荐套餐</span>
        <div class="setMealType">
          <span @click="basic(3,10)">基本险</span>
          <span @click="basic(3,8)">经济险</span>
          <span @click="basic(0,0)">全险</span>
        </div>
      </div>
      <div class="partDescPrice">
        <div class="everyPrice"
        v-for="(item,index) in PriceDesc1"
        :key="index"
        @click="change(item.otherPrice,index,'PriceDesc1')">
          <img @click.stop="changeSel(index)" v-if="item.select" src="../../images/check.png" alt="">
          <img @click.stop="changeSel(index)" v-else src="../../images/yuan.png" alt="">
          <span class="name">{{item.name}}</span>
          <span v-if="item.otherPrice">{{item.desc}}{{item.container}}</span>
          <span class="money">{{item.price}}</span>
          <img class="right" v-show="item.otherPrice && PriceDesc1[index].select" src="../../images/right.png" alt="">
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="up">
        <span>全款总价</span>
        <span class="price">{{totalPrice}}元</span>
      </div>
      <div class="down">
        此结果仅供参考，实际费用以当地缴费为准
      </div>
    </div>

    <!-- 右侧栏 -->
    <div class="right-bar" v-if="isShow">
      <img @click="changeIsHid" class="leftImg" src="../../images/threeRight.png" alt="">
    </div>
    <div v-if="rightData.nowPriceDesc == 'PriceDesc'" :class="['right-container',isShow?'swiperLeft':'swiperRight']">
      <div
      v-for="(item,index) in rightData.data"
      :key="index"
      :class="['options',{'selected':PriceDesc[rightData.index].price == item.Oprice}]"
      @click="changePrice(item.Oprice,item.Oname)">
        {{item.Oname}}
      </div>
    </div>
    <div v-else :class="['right-container',isShow?'swiperLeft':'swiperRight']">
      <div
      v-for="(item,index) in rightData.data"
      :key="index"
      :class="['options',{'selected':PriceDesc1[rightData.index].startPrice == item.Oprice}]"
      @click="changePrice(item.Oprice,item.Oname)">
        {{item.Oname}}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  inject:['reload'],
  data() {
    return {
      toTopShow:false,
      nakedPrice:0,
      carDesc:'',
      PriceDesc:[
        {
          name:'购置税',
          price:13667
        },
        {
          name:'交强险',
          price:950,
          otherPrice:[
            {
              Oname:'家用六座以下',
              Oprice:950
            },
            {
              Oname:'家用六座及以上',
              Oprice:1100
            }
          ]
        },
        {
          name:'车船使用费',
          price:300,
          otherPrice:[
            {
              Oname:'1.0L(含)以下',
              Oprice:300
            },
            {
              Oname:'1.0-1.6L(含)',
              Oprice:420
            },
            {
              Oname:'1.6-2.0L(含)',
              Oprice:480
            },
            {
              Oname:'2.0-2.5L(含)',
              Oprice:900
            },
            {
              Oname:'2.5-3.0L(含)',
              Oprice:1920
            },
            {
              Oname:'3.0-4.0L(含)',
              Oprice:3480
            },
            {
              Oname:'4.0L以上',
              Oprice:5280
            },
          ]
        },
        {
          name:'上牌费用',
          price:500
        },
      ],
      nowPriceDesc:'',
      rightData:{
        nowPriceDesc:'',
        index:0,
        data:[]
      },
      isShow:false,
      PriceDesc1:[
        {
          name:'第三者责任险',
          desc:'赔付:',
          container:'5万',
          price:710,
          startPrice:710,
          select:true,
          otherPrice:[
            {
              Oname:'5万',
              Oprice:710
            },
            {
              Oname:'10万',
              Oprice:1026
            },
            {
              Oname:'20万',
              Oprice:1270
            },
            {
              Oname:'50万',
              Oprice:1721
            },
            {
              Oname:'100万',
              Oprice:2242
            },
          ]
        },
        {
          name:'车辆损失险',
          price:1804,
          startPrice:1804,
          select:true
        },
        {
          name:'不计免赔特约险',
          price:503,
          startPrice:503,
          select:true
        },
        {
          name:'全车盗抢险',
          price:904,
          startPrice:904,
          select:true
        },
        {
          name:'玻璃单独破碎险',
          price:304,
          startPrice:304,
          desc:'玻璃:',
          container:'国产',
          select:true,
          otherPrice:[
            {
              Oname:'国产',
              Oprice:304
            },
            {
              Oname:'进口',
              Oprice:496
            },
          ]
        },
        {
          name:'自燃损失险',
          price:240,
          startPrice:240,
          select:true
        },
        {
          name:'涉水险/发动机特别损失险',
          price:90,
          startPrice:90,
          select:true
        },
        {
          name:'车身划痕险',
          desc:'赔付:',
          container:'2千',
          price:400,
          startPrice:400,
          select:true,
          otherPrice:[
            {
              Oname:'2千',
              Oprice:400
            },
            {
              Oname:'5千',
              Oprice:570
            },
            {
              Oname:'1万',
              Oprice:760
            },
            {
              Oname:'2万',
              Oprice:1140
            },
          ]
        },
        {
          name:'司机座位责任险',
          desc:'赔付:',
          container:'1万',
          price:42,
          startPrice:42,
          select:true,
          otherPrice:[
            {
              Oname:'1万',
              Oprice:42
            },
            {
              Oname:'2万',
              Oprice:84
            },
            {
              Oname:'3万',
              Oprice:126
            },
            {
              Oname:'4万',
              Oprice:168
            },
            {
              Oname:'5万',
              Oprice:210
            },
          ]
        },
        {
          name:'乘客座位责任险',
          desc:'赔付:',
          container:'1万',
          price:108,
          startPrice:108,
          select:true,
          otherPrice:[
            {
              Oname:'1万',
              Oprice:108
            },
            {
              Oname:'2万',
              Oprice:216
            },
            {
              Oname:'3万',
              Oprice:324
            },
            {
              Oname:'4万',
              Oprice:432
            },
            {
              Oname:'5万',
              Oprice:540
            },
          ]
        },
      ]

    }
  },
  created() {
    this.nakedPrice = Math.ceil(sessionStorage.getItem('nakedPrice')*10000)
    this.carDesc = sessionStorage.getItem('time') + sessionStorage.getItem('title') + sessionStorage.getItem('Desc')
  },
  computed: {
    NecessaryExp() {
      let price = 0
      this.PriceDesc.map((p)=>{
        price += p.price
      })
      return price
    },
    ComInsurance() {
      let price = 0
      this.PriceDesc1.map((p)=>{
        price += p.price
      })
      return price
    },
    totalPrice() {
      return (this.nakedPrice + this.NecessaryExp + this.ComInsurance)
    }
  },
  watch: {
    PriceDesc1:{
      handler(val,oldVal) {
        for(let i = 0;i < val.length; i++) {
          if(!val[i].select) {
            val[i].price = 0
          }else{
            val[i].price = val[i].startPrice
          }
        }
        // console.log(val)
      },
      deep:true
    }
  },
  methods: {
    refresh() {
      this.reload()
    },
    change(data,index,c){
      if(data && this.PriceDesc1[index].select){
        this.rightData.nowPriceDesc = c
        this.rightData.index = index
        this.rightData.data = data
        this.isShow = true
        console.log(this.rightData)
      }
    },
    changeSel(index) {
      this.PriceDesc1[index].select = !this.PriceDesc1[index].select
    },
    changeIsHid() {
      this.isShow = false
    },
    basic(s,e) {
      this.PriceDesc1.map(e => {
        e.select = true
      })
      for(let i = s;i<e;i++) {
        this.PriceDesc1[i].select = false
      }
    },
    changePrice(newPrice,newName) {
      if(this.rightData.nowPriceDesc === 'PriceDesc') {
        this.PriceDesc[this.rightData.index].price = newPrice
        console.log(this.PriceDesc[this.rightData.index].price)
        console.log(newPrice)
      }else {
        this.PriceDesc1[this.rightData.index].startPrice = newPrice
        this.PriceDesc1[this.rightData.index].container = newName
      }
      this.isShow = false
    },
    handleScroll() {
      //首先修改相对滚动位置
      this.scrollTop = window.pageYOffset || document.body.scrollTop;
      if (this.scrollTop > 100) {
        this.toTopShow = true
      }else {
        this.toTopShow = false
      }
    },
  },
  mounted (){
    this.$router.afterEach((to, from, next) => {
        window.scrollTo(0, 0)
    })
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

<style lang="stylus" scoped>
.selected
  color #0A4E8A !important
.computeAllPrice
  width 100%
  background-color #f2f2f2
  margin-bottom 2rem
  .top
    position fixed
    top 0
    left 0
    height 4rem
    width 100%
    background-color #6090dd
    padding 0 1.5rem
    display flex
    justify-content space-between
    align-items center
    font-size 1.4rem
    color #fff
    z-index 300
  .header
    width 100%
    background-color #ffffff
    .headerPrice
      width 100%
      background-color #5a8cdc
      .headerText
        display block
        font-size 1.4rem
        color #c8d6f1
        padding 2rem 1.5rem 0 1.5rem
      .totalPrice
        width 100%
        display flex
        justify-content space-between
        align-items center
        padding 0 1.5rem 1rem
        .totalPriceNum
          color #c8d6f1
          font-size 1.4rem
          span
            color #ffffff
            font-size 4rem
        .reBtn
          color #ffffff
          font-size 1.4rem
          border 0.1rem solid #ffffff
          border-radius 0.3rem
          padding 0.3rem 1rem
      .PriceDesc
        width 100%
        background-color rgba(0,0,0,.1)
        height 4.4rem
        display flex
        .one
          flex 1
          text-align center
          font-size 1.2rem
          line-height 4.4rem
          color #a4bce1
          height 100%
          span
            color #dce5f4
        .NecessaryExp
          box-sizing border-box
          border-left 0.1rem solid #5a8cdc
          border-right 0.1rem solid #5a8cdc
    .headerData
      width 100%
      padding 0 1.5rem
      .car
        border-bottom 0.1rem solid #ececec
      .data
        display flex
        font-size 1.6rem
        height 5.2rem
        align-items center
        .text
          width 8rem
          color #666
          height 5.2rem
          line-height 5.2rem
          margin-right 1rem
        .desc
          flex 1
          text-align right
          font-size 1.4rem
  .containerOne
    width 100%
    .allPartPrice
      display flex
      justify-content space-between
      height 3.3rem
      align-items center
      padding 0 3rem 0 1.5rem
      color #999
      font-size 1.3rem
    .partDescPrice
      background-color #fff
      padding 0 1.5rem
      .everyPrice
        height 5.2rem
        display flex
        position relative
        justify-content space-between
        align-items center
        color #666
        font-size 1.6rem
        border-bottom 0.1rem solid #ececec
        &:last-child
          border none
        span
          font-size 1.4rem
        .money
          position absolute
          right 1.5rem
        img
          position absolute
          right 0
          width 1.3rem
          height 1.3rem
  .containerTwo
    width 100%
    .allPartPrice
      display flex
      justify-content space-between
      height 3.3rem
      align-items center
      padding 0 3rem 0 1.5rem
      color #999
      font-size 1.3rem
    .setMeal
      background-color #fff
      padding 0 1.5rem
      height 5.2rem
      margin-bottom 0.2rem
      display flex
      align-items center
      justify-content space-between
      span
        font-size 1.6rem
      .setMealType
        span
          color #3369b1
          margin-right 1.5rem
    .partDescPrice
      background-color #fff
      padding 0 1.5rem
      .everyPrice
        width 100%
        height 5.2rem
        display flex
        align-items center
        border-bottom 0.1rem solid #ececec
        position relative
        &:last-child
          border none
        img
          width 2.5rem
          height 2.5rem
          margin-right 1.5rem
        span
          color #999
        .name
          color #333
          font-size 1.6rem
          margin-right 2rem
        .right
          width 1.3rem
          height 1.3rem
          position absolute
          right 0
          margin-right 0
        .money
          position absolute
          right 1.5rem
          color #333
          font-size 1.6rem
  .footer
    width 100%
    margin 2rem 0
    display flex
    flex-direction column
    background-color #fff
    padding 0 1.5rem
    .up
      width 100%
      height 5rem
      display flex
      justify-content space-between
      align-items center
      font-size 1.4rem
      color #333
      border-bottom 0.1rem solid #ececec
      .price
        color #DD2727
    .down
      width 100%
      height 5rem
      line-height 5rem
      font-size 1.2rem
      color #999
  .right-bar
    position fixed
    top 0
    right 0
    left 0
    bottom 0
    background-color rgba(0,0,0,0.3)
    z-index 999
    .leftImg
      position fixed
      z-index 1000
      width 2rem
      top 50%
      left 25%
  .swiperLeft
    transform translate(0px,0px)
    transition transform .4s
  .swiperRight
    transform translate(100%,0px)
    transition transform .4s
  .right-container
      width 60%
      position fixed
      background-color #fff
      top 0
      right 0
      bottom 0
      z-index 999
      padding 0 1rem
      .options
        height 4rem
        line-height 4rem
        font-size 1.5rem
        border-bottom 0.1rem solid #ececec
        &:last-child
          border-bottom none
</style>
