import React from 'react'
import BScroll from 'better-scroll'
import { Carousel, WingBlank,Toast } from 'antd-mobile';

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import { addGoods ,updateGoods} from '../../redux/actions'
import { data, serverDesc, recommend} from './DescData'
import './Desc.styl'
import Head from '../../components/head/Head'


class Desc extends React.Component{
  state = {
    allData:{},
    totalCount:0,
    listHeight:[],
    headBars: [
      {
        name:'商品',
        ref:'goods'
      },
      {
        name:'详情',
        ref: 'goodsDesc'
      },
      {
        name:'参数',
        ref: 'promt'
      },
      {
        name:'推荐',
        ref: 'recom'
      },
    ],
    spanCurrent:0,
    goodsIndex:0,
    sizeIndex:3,
    shopNum:1,
    selectType:true,
    shopCartNum:0
  }

  componentWillMount() {
    let { total } = this.props
    let { totalCount} = this.state
    console.log(total,'4545454')

    if (total[0]) {
      for (let i = 0; i < total.length; i++) {
        totalCount += total[i].num
      }
      this.setState({ totalCount })
    }

    let id = this.props.location.state.id
    // 循环找出匹配的id 的数据
    for(let i = 0; i < data.length; i++) {
      if(data[i].id === id) {
        this.setState({
          allData: data[i]
        })
      }
    }

  }
  componentDidMount() {
    const content = document.querySelector('.wrapper');
    const shopContent = document.querySelector('.shopWrapper');
    // 开启bs
    this.scroll = new BScroll(content, {
      click:true,
      probeType:3
    });
    this.shopScroll = new BScroll(shopContent, {
      click:true,
      probeType:3
    });
    // 监听滚动事件
    this.scroll.on('scroll', pos => {
      this.scrollY = Math.abs(Math.round(pos.y));
      // console.log(this.scrollY);
      this.currentIndex()
    })
    this.handleScroll()
    // console.log(this.refs.goods.clientHeight)

  }
  handleScroll = () => {
    const { headBars, listHeight } = this.state
    let height = 0
    listHeight.push(height)
    let ref = this.refs
    for (let i = 0; i < headBars.length; i++) {
      height += ref[headBars[i].ref].clientHeight
      // 暂时还没解决使用antd Swiper组件时 获取的clientHeight为0
      if(i === 0){
        height += 308
      }
      listHeight.push(height)
    }
    this.setState({ listHeight })
    console.log(listHeight,'555555')
  }
  currentIndex = ()=> {
    const { listHeight, spanCurrent } = this.state
    for (let i = 0; i <listHeight.length; i++) {
      let height1 = listHeight[i];
      let height2 = listHeight[i + 1];
      if (this.scrollY >= height1 && this.scrollY < height2) {
        // return i
        // console.log(i,'uuuuuuuuuuuuuuu')
        if (i !== spanCurrent) {
          this.setState({
            spanCurrent: i
          })
        }
      }
    }
    return 0
  }
  // 点击导航按钮的事件
  changeSpanCurrent = (index,el) => {
    console.log('changeSpanCurrent')
    this.setState({
      spanCurrent:index
    })
    this.scroll.scrollToElement(this.refs[el], 100)
  }
  // 点击展开类型选择框
  addShopCar = () => {
    this.setState({ selectType:false})
  }
  // 点击之后添加进购物车
  confirm = () => {
    Toast.success('已经进入您的购物车了', 1);
    const { allData, goodsIndex, sizeIndex, shopNum, totalCount} = this.state
    const { total } = this.props
    this.setState({
      selectType: true,
      totalCount: totalCount + shopNum
    })
    const data = {
      id: allData.id,
      name: allData.name,
      size: allData.size[sizeIndex],
      num: shopNum,
      price: allData.price,
      type: allData.color[goodsIndex].colorName,
      img: allData.color[goodsIndex].goodsImg[0],
      select:false
    }
    // 判断此物品是否已经存在购物车内
    let result = { bool:false}
    // let result = total.some(todo => {
    //   if (todo.id === data.id && todo.size === data.size && todo.type === data.type) {
    //     return true
    //   }
    // })
    for (let i = 0; i < total.length; i++) {
      if (total[i].id === data.id && total[i].size === data.size && total[i].type === data.type) {
        result.bool = true
        result.index = i
      }
    }
    console.log(result, 'result')
    // 如果state里没有数据，直接添加
    if (!total[0] || !result.bool) {
      console.log('第一次')
      this.props.addGoods(data)
    }else {
      // 在这里直接修改total中一样的商品的数量，然后直接把整个total当作data传到reducer
      total[result.index].num += data.num
      this.props.updateGoods(total)
      // console.log(total)
      // console.log('已存在', result.index)
    }
    console.log(total, 'total')
  }
  // 改变购买数量
  reduceShopNum = () => {
    console.log('reduce')
    let shopNum = this.state.shopNum
    if (shopNum<=1){
      return
    }else {
      shopNum -= 1
      this.setState({ shopNum })
    }
  }
  addShopNum = () => {
    console.log('add')
    let shopNum = this.state.shopNum
    shopNum += 1
    this.setState({ shopNum })
  }
  //改变购买数量
  changeSize = (index) => {
    console.log('changeSize')
    this.setState({
      sizeIndex:index
    })
  }
  //改变选中颜色
  changeColor = (index) => {
    this.setState({
      goodsIndex: index
    })
  }
  // 去购物车界面
  goCart = () => {
    if (this.state.totalCount > 0) {
      this.props.history.push('./main/shop1')
    }
  }
  render () {
    // const { data } = this.props.location.state
    // console.log(this.state.shopNum,'44444444444')
    const { allData, headBars, spanCurrent, goodsIndex, sizeIndex, shopNum, selectType, totalCount} = this.state
    console.log(this.props)
    console.log('alldata',this.state.allData)
    console.log(this.props.total)
    return (
      <div className="Desc" >
        <Head centerText={allData.name} leftGOback={true} />
        <div className="headBar" >
          <ul className="headBar_btns">
            {
              headBars.map((item,index) => (
                <li
                  // onClick={() => { console.log('555555') }}
                  onClick={() => { this.changeSpanCurrent(index,item.ref)}}
                  key={index}
                  className={spanCurrent === index ? 'spanActive' :''}>
                  {item.name}
                </li>
              ))
            }
          </ul>
        </div>
        <div className="wrapper" ref='DescContainer'>
          <div className="DescContainer">
            <div ref='goods'>
              <div className="DescSwiper bottom" >
                <WingBlank>
                  <Carousel
                    infinite
                    dotStyle={{ backgroundColor: '#d3d3d3', marginBottom: '0.5rem', width: '0.15rem', height: '0.15rem' }}
                    dotActiveStyle={{ marginBottom: '0.5rem', width: '0.15rem', height: '0.15rem' }}
                    >
                    {allData.color[goodsIndex].goodsImg.map(val => (
                      <div key={val} href="#" style={{ display: 'inline-block', width: '100%' }}>
                        <img
                          src={val}
                          alt=""
                          style={{ width: '100%', verticalAlign: 'top', borderRadius: '8px' }}
                          onLoad={() => { window.dispatchEvent(new Event('resize')); }}
                        />
                      </div>
                    ))}
                  </Carousel>
                </WingBlank>
              </div>
              <div className="DescGoodsInfo bottom">
                <div className="DescTitle">
                  <span >商品信息</span>
                </div>
                <div className="DescGoodsInfo_all">
                  <span className="name">{allData.name}</span>
                  <span className="desc">{allData.desc}</span>
                  <span className="price">￥{allData.price}</span>
                </div>
              </div>
              <div className="DescSelected bottom">
                <span className="type">已选版本</span>
                <span>颜色: <span> {allData.color[goodsIndex].colorName}</span></span>
                <span>尺码: <span> {allData.size[sizeIndex]}</span></span>
                <span>选购提示: <span> {allData.promt}</span></span>
                <span>数量: <span> {shopNum}</span></span>
                <img src={require('../../image/other/right.png')} alt="" />
              </div>
            </div>
            <div className="DescGoodsImg bottom" ref='goodsDesc'>
              <div className="DescTitle">
                <span >商品详情</span>
              </div>
              <div className="DescGoodsImgAll">
                {
                  allData.goodsDesc.map((img,index) => (
                    <img key={index} src={img} alt=""/>
                  ))
                }
              </div>
            </div>
            <div ref='promt'>
              <div className="DescTeachPromt bottom">
                <div className="DescTitle">
                  <span>技术参数</span>
                </div>
                <ul>
                  {
                    allData.teachParam.map((item, index) => (
                      <li key={index}>
                        <span>{item.name}</span>
                        <span className="desc">{item.desc}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="DescServer bottom">
                <div className="DescTitle">
                  <span>服务说明</span>
                </div>
                <ul>
                  {
                    serverDesc.map((item, index) => (
                      <li key={index}>
                        <img src={item.img} alt="" />
                        <span>{item.desc}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div className="DescRecommend bottom" ref='recom'>
              <div className="DescTitle">
                <span>相关推荐</span>
              </div>
              <ul className='itemTwo'>
                {
                  recommend.map((item, index) => (
                    <li key={index} onClick={() => { this.goDesc(item.id) }}>
                      <img
                        style={{ width: `${this.state.width}rem`, height: `${this.state.width}rem` }}
                        src={item.img} alt="" />
                      <div className="goodsBox_container_text">
                        <span className="goodsBox_container_text_name">{item.name}</span>
                        <span className="goodsBox_container_text_desc">{item.desc}</span>
                        <span className="goodsBox_container_text_price">￥{item.price}</span>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
        <div className="footerBar">
          <img onClick={this.goCart} src={require('../../image/desc/shop.png')} alt=""/>
          <span className='goodsNum' style={{ display: `${totalCount?'':'none'}`}}>{totalCount}</span>
          <div className="DescfooterBar_btn" style={{ display: selectType ? "" : "none" }}>
            <button className='addShopCar' onClick={this.addShopCar}>加入购物车</button>
            <button className='Buy' onClick={this.goHome}>现在购买</button>
          </div>
          <div className="DescfooterBar_btn" style={{ display: selectType ? "none" : "" }}>
            <button className='confirm' onClick={this.confirm}>确认</button>
          </div>
        </div>
        <div className="shopCar" style={{ display: selectType ? "none" : "" }}>
          <div className="shopCarContainer">
            <div className="shopCarContainer_head">
              <img src={allData.color[goodsIndex].goodsImg[0]} alt=""/>
              <div className="head_text">
                <span>{allData.name}</span>
                <p>
                  <span>{allData.color[goodsIndex].colorName}</span>
                  <span>{allData.size[sizeIndex]}</span>
                  <span>{allData.promt}</span>
                </p>
                <span className="price">￥{allData.price}</span>
              </div>
            </div>
            <div className="shopWrapper">
              <div className="allSelect">
                <div className='colorSelect'>
                  <div className="DescTitle">
                    <span>颜色选择</span>
                  </div>
                  <ul className="SelectOne">
                    {
                      allData.color.map((item,index) => (
                        <li
                        onClick={()=>{this.changeColor(index)}}
                        key={index}
                        className={index === goodsIndex ?'DescActive':''}>
                          <img src={item.colorCircular} alt=""/>
                          <span>{item.colorName}</span>
                        </li>
                      ))
                    }
                  </ul>
                </div>
                <div className="sizeSelect">
                  <div className="DescTitle">
                    <span>尺码选择</span>
                  </div>
                  <ul className="SelectOne">
                    {
                      allData.size.map((item,index) => (
                        <li
                          onClick={() => { this.changeSize(index)}}
                        key={index}
                        className={index === sizeIndex ? 'DescActive' : ''}>
                          <span>{item}</span>
                        </li>
                      ))
                    }
                  </ul>
                </div>
                <div className="numberSelect">
                  <div className="DescTitle">
                    <span>选择数量</span>
                  </div>
                  <div className="shopNum">
                    <span onClick={this.reduceShopNum} className={`btn ${shopNum > 1 ?'shadow' : ''}`}>
                      <span>-</span>
                    </span>
                    <span>{shopNum}</span>
                    <span onClick={this.addShopNum} className="btn shadow">
                      <span>+</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  total : state.shopCart
})
const mapDispatchToProps = (dispatch) => ({
  addGoods: data => dispatch(addGoods(data)),
  updateGoods: data => dispatch(updateGoods(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Desc))