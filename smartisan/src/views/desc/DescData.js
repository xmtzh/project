const data = [
  {
    name:'Smartisan 帆布鞋',
    id:'x1',
    desc: '一双踏实、舒适的帆布鞋',
    price: 199.00,
    promt:'请依据个人脚长参照下方尺码信息选择合适尺码',
    color:[
      {
        colorName:'酒红色',
        goodsImg:[
          'https://resource.smartisan.com/resource/2f9a0f5f3dedf0ed813622003f1b287b.jpg?x-oss-process=image/format,webp',
          'https://resource.smartisan.com/resource/0cd8f107c70d002caf902745355e269a.jpg?x-oss-process=image/format,webp',
          'https://resource.smartisan.com/resource/df31b0e4fac00661c0bab988c8543be0.jpg?x-oss-process=image/format,webp',
          'https://resource.smartisan.com/resource/fa42dcd439e9fb990831f1d21c3f19b8.jpg?x-oss-process=image/format,webp',
          'https://resource.smartisan.com/resource/face0baa69fccf086e1e227cf78fc0c3.jpg?x-oss-process=image/format,webp',
        ]
      },
      {
        colorName:'黑色',
        goodsImg:[
          'https://resource.smartisan.com/resource/578116bddf1d170c89e9af7ba5073fb6.jpg?x-oss-process=image/format,webp',
          'https://resource.smartisan.com/resource/ebb01298315bf2ebdb6b21ee2c8e4237.jpg?x-oss-process=image/format,webp',
          'https://resource.smartisan.com/resource/bd634d820859032b4c0f7a521eda486d.jpg?x-oss-process=image/format,webp',
          'https://resource.smartisan.com/resource/51958a0a771f24e405f1b5de98108528.jpg?x-oss-process=image/format,webp',
          'https://resource.smartisan.com/resource/e8791dd06c1e964d89436407f8827fe4.jpg?x-oss-process=image/format,webp'
        ]
      },
      {
        colorName:'白色',
        goodsImg:[
          'https://resource.smartisan.com/resource/1c13034d1028f3620d487c1db7184a51.jpg?x-oss-process=image/format,webp',
          'https://resource.smartisan.com/resource/16686465c0bb45cfd6253b47689f1b4e.jpg?x-oss-process=image/format,webp',
          'https://resource.smartisan.com/resource/7db81467c2a1d5e9561955bd123bcd15.jpg?x-oss-process=image/format,webp',
          'https://resource.smartisan.com/resource/6332cee56c8eaf44db65936b9ab16f00.jpg?x-oss-process=image/format,webp',
          'https://resource.smartisan.com/resource/face0baa69fccf086e1e227cf78fc0c3.jpg?x-oss-process=image/format,webp'
        ]
      },
      {
        colorName:'藏蓝色',
        goodsImg: [
          'https://resource.smartisan.com/resource/1db1a8bfee3623fded41c9115b5a5335.jpg?x-oss-process=image/format,webp',
          'https://resource.smartisan.com/resource/5ac98ab2ad4cc0a9ea21432a4ec4f38e.jpg?x-oss-process=image/format,webp',
          'https://resource.smartisan.com/resource/ee1d31263b89edda3945be58aeace0bd.jpg?x-oss-process=image/format,webp',
          'https://resource.smartisan.com/resource/410fe25f97d773e250bba922c0acbdf5.jpg?x-oss-process=image/format,webp',
          'https://resource.smartisan.com/resource/face0baa69fccf086e1e227cf78fc0c3.jpg?x-oss-process=image/format,webp',
        ]
      }
    ],
    size:[35,36,37,38,39,40,41,42,43,44,45],
    goodsDesc:[
      'https://resource.smartisan.com/resource/88cfe3dc879813dd6f60e57405a58cc1.jpg?x-oss-process=image/resize,w_750/indexcrop,y_1440,i_0/format,webp',
      'https://resource.smartisan.com/resource/88cfe3dc879813dd6f60e57405a58cc1.jpg?x-oss-process=image/resize,w_750/indexcrop,y_1440,i_1/format,webp',
      'https://resource.smartisan.com/resource/88cfe3dc879813dd6f60e57405a58cc1.jpg?x-oss-process=image/resize,w_750/indexcrop,y_1440,i_2/format,webp',
      'https://resource.smartisan.com/resource/88cfe3dc879813dd6f60e57405a58cc1.jpg?x-oss-process=image/resize,w_750/indexcrop,y_1440,i_3/format,webp',
      'https://resource.smartisan.com/resource/88cfe3dc879813dd6f60e57405a58cc1.jpg?x-oss-process=image/resize,w_750/indexcrop,y_1440,i_4/format,webp',
      'https://resource.smartisan.com/resource/88cfe3dc879813dd6f60e57405a58cc1.jpg?x-oss-process=image/resize,w_750/indexcrop,y_1440,i_5/format,webp',
      'https://resource.smartisan.com/resource/88cfe3dc879813dd6f60e57405a58cc1.jpg?x-oss-process=image/resize,w_750/indexcrop,y_1440,i_6/format,webp'
    ],
    teachParam:[
      {
        name:'帮面材料',
        desc:'100% 棉'
      },
      {
        name:'颜色',
        desc:'黑色/白色/藏蓝/酒红'
      },
      {
        name:'性别',
        desc:'通用'
      },
      {
        name:'鞋帮高低',
        desc:'低帮'
      },
      {
        name: '跟高',
        desc: '平跟'
      },
      {
        name:'鞋底',
        desc:'平低'
      },
    ]
  }
]
const serverDesc = [
  {
    img:require('../../image/desc/che.png'),
    desc:'7 天无理由退货'
  },
  {
    img:require('../../image/desc/dun.png'),
    desc:'15 天质量问题换货'
  },
  {
    img:require('../../image/desc/mian.png'),
    desc:'满 150 元免运费'
  },
  {
    img:require('../../image/desc/sf.png'),
    desc:'72 小时内发货'
  },
]

const recommend = [
    {
      id: 'x18',
      name: 'Smartisan 双口 & 快充车载充电器',
      img: 'https://resource.smartisan.com/resource/d4480234a2f24b0ff5acd98288fd902d.jpg?x-oss-process=image/resize,w_342/format,webp',
      desc: '铝合金机身、双口 & 快充、智能调节',
      price: 79.00,
      path: '/buy'
    },
    {
      id: 'x6',
      name: '坚果“电池形电池”移动电源',
      img: 'https://resource.smartisan.com/resource/33954b3f6a2f1614c5482ef130af9cc8.jpg?x-oss-process=image/resize,w_252/format,webp',
      desc: '别具一格的“全能型”移动电源',
      price: 69.00,
      path: '/buy'
    },
    {
      id: 'x7',
      name: 'Smartisan 半入耳式耳机',
      img: 'https://resource.smartisan.com/resource/8a875418797690e26b665cc0d86dffc7.jpg?x-oss-process=image/resize,w_342/format,webp',
      desc: '经典配色、专业调音、高品质麦克风',
      price: 59.00,
      path: '/buy'
    },
    {
      id: 'x21',
      name: '坚果彩虹数据线',
      img: 'https://resource.smartisan.com/resource/82aab62886740f165a3631ce6cffe895.jpg?x-oss-process=image/resize,w_342/format,webp',
      desc: '七彩配色随机发货，为生活增添一份小小惊喜',
      price: 19.00,
      path: '/buy'
    },
    {
      id: 'x8',
      name: '坚果砖式蓝牙小音箱',
      img: 'https://resource.smartisan.com/resource/c44f0ab4da5591fc3d0f82b7ac0f4f65.jpg?x-oss-process=image/resize,w_342/format,webp',
      desc: '一款设计出色、音质出众的随身音箱',
      price: 149.00,
      path: '/buy'
    },
    {
      id: 'x5',
      name: 'Smartisan 快充移动电源 10000mAh',
      img: 'https://resource.smartisan.com/resource/f319b26eb69e8ba351423abfad347eae.jpg?x-oss-process=image/resize,w_342/format,webp',
      desc: '10000mAh 双向快充、轻盈便携、高标准安全保护',
      price: 129.00,
      path: '/buy'
    }
]
export {
  data,
  serverDesc,
  recommend
}