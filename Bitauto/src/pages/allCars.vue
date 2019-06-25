<template>
  <div class="allCars">
    <Header></Header>
    <RecentlyLook></RecentlyLook>
    <!-- 条件选车 -->
    <div class="flexOne sortChooseCar">
      <router-link class="chooseOne" to="#" v-for="(item,index) in sortChooseCar" :key="index">
        <img :src="item.image" alt="">
        <span>{{item.name}}</span>
      </router-link>
    </div>
    <!-- 热门推荐 -->
    <div class="host-recommend">
      热门推荐
    </div>
    <!-- 推荐类型 -->
    <div class="recommend-type">
      <router-link class="recommend-type-one" to="#" v-for="(item,index) in recommendType" :key="index">
        {{item.info}}
      </router-link>
    </div>
    <!-- 品牌选车 -->
    <div class="flexOne searchBrand">
      <router-link class="chooseOne" to="#" v-for="(item,index) in searchBrand" :key="index">
        <img :src="item.image" alt="">
        <span>{{item.text}}</span>
      </router-link>
    </div>
    <!-- 图片选车 -->
    <div class="flexOne host-car">
      <router-link class="chooseOne" to="#" v-for="(item,index) in hostCar" :key="index">
        <img :src="item.image" alt="">
        <span>{{item.text}}</span>
      </router-link>
    </div>


    <!-- indexList -->
    <div class="wrap">
      <index-list :data="playerList">
      </index-list>
    </div>

    <!-- <div class="wrap">
      <mt-index-list>
        <mt-index-section v-for="(item,index) in playerList" :key="index" :index="item.title">
          <mt-cell  v-for="(car,index) in item.items" :key="index"  :title="car"></mt-cell>
        </mt-index-section>
      </mt-index-list>
    </div> -->





  </div>
</template>

<script>
import Header from '@/components/header'
import RecentlyLook from '@/components/recentlyLook'
import IndexList from '@/components/IndexList'
export default {
  name:'allcars',
  data() {
    return{
      sortChooseCar:[
        {image:'http://image.bitautoimg.com/uimg/2017xuanchegaiban/ic_beans_8@2x.png',name:'上市新车'},
        {image:'http://image.bitautoimg.com/uimg/2017xuanchegaiban/ic_beans_7@2x.png',name:'销量排行'},
        {image:'http://image.bitautoimg.com/uimg/2017xuanchegaiban/ic_beans_1@2x.png',name:'新能源'},
        {image:'http://image.bitautoimg.com/uimg/2017xuanchegaiban/ic_beans_9@2x.png',name:'条件选车'},
      ],
      recommendType:[
        {info:'8-12万SUV'},
        {info:'12-18万SUV'},
        {info:'8-12万轿车'},
      ],
      searchBrand:[
        {
          image:'http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_9_100.png',
          text:'奥迪'
        },
        {
          image:'http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_8_100.png',
          text:'大众'
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
      hostCar:[
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
      ],
      playerList:[
        {
          "title": "A",
          "items": [
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_9_100.png",
              "name": "奥迪"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_92_100.png",
              "name": "阿尔法·罗密欧"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_97_100.png",
              "name": "阿斯顿·马丁"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_313_100.png",
              "name": "爱驰"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_318_100.png",
              "name": "ABT"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_319_100.png",
              "name": "AC Schnitzer"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_326_100.png",
              "name": "艾康尼克"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_268_100.png",
              "name": "ALPINA"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_289_100.png",
              "name": "ARCFOX"
            }
          ]
        },
        {
          "title": "B",
          "items": [
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_157_100.png",
              "name": "宝骏"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_3_100.png",
              "name": "宝马"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_2_100.png",
              "name": "奔驰"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_26_100.png",
              "name": "本田"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_127_100.png",
              "name": "别克"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_5_100.png",
              "name": "标致"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_15_100.png",
              "name": "比亚迪"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_82_100.png",
              "name": "保时捷"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_236_100.png",
              "name": "宝沃"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_59_100.png",
              "name": "奔腾"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_263_100.png",
              "name": "比速"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_195_100.png",
              "name": "北汽绅宝"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_211_100.png",
              "name": "北汽幻速"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_168_100.png",
              "name": "北汽威旺"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_129_100.png",
              "name": "北汽昌河"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_14_100.png",
              "name": "北汽制造"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_340_100.png",
              "name": "北京清行"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_282_100.png",
              "name": "北汽道达"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_324_100.png",
              "name": "博郡汽车"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_216_100.png",
              "name": "北汽新能源"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_163_100.png",
              "name": "北京"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_320_100.png",
              "name": "拜腾"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_85_100.png",
              "name": "宾利"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_135_100.png",
              "name": "布加迪"
            }
          ]
        },
        {
          "title": "C",
          "items": [
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_136_100.png",
              "name": "长安汽车"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_159_100.png",
              "name": "长安欧尚"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_281_100.png",
              "name": "长安轻型车"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_341_100.png",
              "name": "车驰汽车"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_283_100.png",
              "name": "长安跨越"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_21_100.png",
              "name": "长城"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_221_100.png",
              "name": "成功"
            }
          ]
        },
        {
          "title": "D",
          "items": [
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_8_100.png",
              "name": "大众"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_306_100.png",
              "name": "大乘汽车"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_197_100.png",
              "name": "东风风度"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_253_100.png",
              "name": "东风风光"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_141_100.png",
              "name": "东风风神"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_115_100.png",
              "name": "东风风行"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_311_100.png",
              "name": "东风富康"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_205_100.png",
              "name": "东风小康"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_27_100.png",
              "name": "东风"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_310_100.png",
              "name": "东风·瑞泰特"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_29_100.png",
              "name": "东南"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_113_100.png",
              "name": "道奇"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_179_100.png",
              "name": "DS"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_294_100.png",
              "name": "电咖"
            }
          ]
        },
        {
          "title": "F",
          "items": [
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_7_100.png",
              "name": "丰田"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_17_100.png",
              "name": "福特"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_40_100.png",
              "name": "菲亚特"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_91_100.png",
              "name": "法拉利"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_67_100.png",
              "name": "福迪"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_208_100.png",
              "name": "福汽启腾"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_128_100.png",
              "name": "福田"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_257_100.png",
              "name": "Faraday Future"
            }
          ]
        },
        {
          "title": "G",
          "items": [
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_147_100.png",
              "name": "广汽传祺"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_295_100.png",
              "name": "广汽新能源"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_334_100.png",
              "name": "格罗夫"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_332_100.png",
              "name": "GFG Style"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_182_100.png",
              "name": "观致"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_290_100.png",
              "name": "国金"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_331_100.png",
              "name": "国机智骏"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_321_100.png",
              "name": "国能汽车"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_109_100.png",
              "name": "GMC"
            }
          ]
        },
        {
          "title": "H",
          "items": [
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_196_100.png",
              "name": "哈弗"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_32_100.png",
              "name": "海马"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_259_100.png",
              "name": "汉腾"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_58_100.png",
              "name": "红旗"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_112_100.png",
              "name": "华泰"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_170_100.png",
              "name": "海格"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_181_100.png",
              "name": "恒天"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_325_100.png",
              "name": "合众汽车"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_302_100.png",
              "name": "红星汽车"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_52_100.png",
              "name": "黄海"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_292_100.png",
              "name": "华骐"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_225_100.png",
              "name": "华颂"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_336_100.png",
              "name": "HYCAN合创"
            }
          ]
        },
        {
          "title": "J",
          "items": [
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_34_100.png",
              "name": "吉利"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_35_100.png",
              "name": "江淮"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_98_100.png",
              "name": "捷豹"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_4_100.png",
              "name": "Jeep"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_296_100.png",
              "name": "捷途"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_37_100.png",
              "name": "江铃"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_287_100.png",
              "name": "奇点汽车"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_323_100.png",
              "name": "捷达"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_327_100.png",
              "name": "几何汽车"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_39_100.png",
              "name": "金杯"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_57_100.png",
              "name": "金龙"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_161_100.png",
              "name": "金旅"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_152_100.png",
              "name": "九龙"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_293_100.png",
              "name": "极星"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_279_100.png",
              "name": "君马"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_322_100.png",
              "name": "钧天汽车"
            }
          ]
        },
        {
          "title": "K",
          "items": [
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_107_100.png",
              "name": "凯迪拉克"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_220_100.png",
              "name": "凯翼"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_51_100.png",
              "name": "克莱斯勒"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_314_100.png",
              "name": "卡尔曼"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_150_100.png",
              "name": "开瑞"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_342_100.png",
              "name": "开沃汽车"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_330_100.png",
              "name": "Karma"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_214_100.png",
              "name": "卡升"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_213_100.png",
              "name": "卡威"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_188_100.png",
              "name": "卡尔森"
            }
          ]
        },
        {
          "title": "L",
          "items": [
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_94_100.png",
              "name": "雷克萨斯"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_99_100.png",
              "name": "雷诺"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_267_100.png",
              "name": "领克"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_95_100.png",
              "name": "林肯"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_36_100.png",
              "name": "陆风"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_96_100.png",
              "name": "路虎"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_76_100.png",
              "name": "力帆"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_16_100.png",
              "name": "铃木"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_80_100.png",
              "name": "劳斯莱斯"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_86_100.png",
              "name": "兰博基尼"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_153_100.png",
              "name": "猎豹"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_301_100.png",
              "name": "零跑汽车"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_307_100.png",
              "name": "领途汽车"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_166_100.png",
              "name": "理念"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_309_100.png",
              "name": "理想"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_343_100.png",
              "name": "罗夫哈特"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_278_100.png",
              "name": "罗伦士"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_83_100.png",
              "name": "路特斯"
            }
          ]
        },
        {
          "title": "M",
          "items": [
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_18_100.png",
              "name": "马自达"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_79_100.png",
              "name": "名爵"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_81_100.png",
              "name": "MINI"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_183_100.png",
              "name": "迈凯伦"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_93_100.png",
              "name": "玛莎拉蒂"
            }
          ]
        },
        {
          "title": "N",
          "items": [
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_303_100.png",
              "name": "哪吒汽车"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_155_100.png",
              "name": "纳智捷"
            }
          ]
        },
        {
          "title": "O",
          "items": [
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_84_100.png",
              "name": "讴歌"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_305_100.png",
              "name": "欧拉"
            }
          ]
        },
        {
          "title": "Q",
          "items": [
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_42_100.png",
              "name": "奇瑞"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_156_100.png",
              "name": "启辰"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_28_100.png",
              "name": "起亚"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_231_100.png",
              "name": "前途"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_339_100.png",
              "name": "乔治·巴顿"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_43_100.png",
              "name": "庆铃"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_328_100.png",
              "name": "清源汽车"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_241_100.png",
              "name": "全球鹰"
            }
          ]
        },
        {
          "title": "R",
          "items": [
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_30_100.png",
              "name": "日产"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_78_100.png",
              "name": "荣威"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_337_100.png",
              "name": "瑞驰新能源"
            }
          ]
        },
        {
          "title": "S",
          "items": [
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_10_100.png",
              "name": "斯柯达"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_111_100.png",
              "name": "斯巴鲁"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_89_100.png",
              "name": "smart"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_260_100.png",
              "name": "SWM斯威"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_299_100.png",
              "name": "思皓"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_25_100.png",
              "name": "三菱"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_317_100.png",
              "name": "SERES"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_165_100.png",
              "name": "上汽大通MAXUS"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_102_100.png",
              "name": "双龙"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_338_100.png",
              "name": "SRM鑫源"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_333_100.png",
              "name": "思铭"
            }
          ]
        },
        {
          "title": "T",
          "items": [
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_189_100.png",
              "name": "特斯拉"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_175_100.png",
              "name": "腾势"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_312_100.png",
              "name": "天际汽车"
            }
          ]
        },
        {
          "title": "W",
          "items": [
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_48_100.png",
              "name": "五菱"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_19_100.png",
              "name": "沃尔沃"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_270_100.png",
              "name": "WEY"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_266_100.png",
              "name": "蔚来"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_132_100.png",
              "name": "五十铃"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_207_100.png",
              "name": "潍柴英致"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_140_100.png",
              "name": "威麟"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_298_100.png",
              "name": "威马汽车"
            }
          ]
        },
        {
          "title": "X",
          "items": [
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_49_100.png",
              "name": "雪佛兰"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_6_100.png",
              "name": "雪铁龙"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_13_100.png",
              "name": "现代"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_297_100.png",
              "name": "小鹏汽车"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_286_100.png",
              "name": "星驰"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_316_100.png",
              "name": "星途"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_304_100.png",
              "name": "新特汽车"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_87_100.png",
              "name": "西雅特"
            }
          ]
        },
        {
          "title": "Y",
          "items": [
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_100_100.png",
              "name": "英菲尼迪"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_258_100.png",
              "name": "驭胜"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_138_100.png",
              "name": "野马"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_335_100.png",
              "name": "银隆新能源"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_53_100.png",
              "name": "一汽"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_41_100.png",
              "name": "依维柯"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_291_100.png",
              "name": "裕路"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_285_100.png",
              "name": "云度"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_308_100.png",
              "name": "云雀汽车"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_178_100.png",
              "name": "宇通"
            }
          ]
        },
        {
          "title": "Z",
          "items": [
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_77_100.png",
              "name": "众泰"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_60_100.png",
              "name": "中华"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_233_100.png",
              "name": "知豆"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_203_100.png",
              "name": "之诺"
            },
            {
              "avatar": "http://image.bitautoimg.com/bt/car/default/images/logo/masterbrand/png/100/m_33_100.png",
              "name": "中兴"
            }
          ]
        }
      ],
    }
  },
  components: {
    Header,
    RecentlyLook,
    IndexList
  },
  methods: {
    onChoose(e) {
      console.log(this.playerList)
    }
  }
}
</script>

<style lang="stylus" scoped>
.allCars
  background-color #f5f7fb
  .flexOne
    display flex
    background-color #fff
    padding 2rem 0
    .chooseOne
      display flex
      flex-direction column
      flex 1
      text-align center
      align-items center
      color #666
      img
        width 4rem
        margin-bottom 0.4rem
  .host-recommend
    padding 0 2rem
    font-weight bolder
    font-size 1.8rem
    color #000
    background-color #fff
  .recommend-type
    display flex
    background-color #fff
    justify-content space-between
    padding 1.5rem 2rem
    .recommend-type-one
      width 30%
      text-align center
      border 0.1rem solid #EAEEF5
      padding 1rem 1rem
      box-sizing border-box
      font-size 1.2rem
      color #333
  .searchBrand
    padding-top 0
  .host-car
    padding 0 0 2rem 0
    .chooseOne
      img
        width 9.7rem
  .wrap
    width 100%
    height 100%


</style>

