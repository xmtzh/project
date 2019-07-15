import React from 'react'
import BScroll from 'better-scroll'
import { Carousel, WingBlank } from 'antd-mobile';

import { data, serverDesc, recommend} from './DescData'
import './Desc.styl'
import Head from '../../components/head/Head'
import GoodsBox from '../../components/goodsBox/GoodsBox'


class Desc extends React.Component{
  state = {
    allData:{},
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
    shopNum:1
  }
  scrollHandler = this.handleScroll.bind(this);
  componentWillMount() {
    let id = this.props.location.state.id
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
    this.scroll = new BScroll(content, {
      click:true
    });
    window.addEventListener('scroll', this.scrollHandler);
    console.log(content);
    console.log(this.scroll, 'scroll');
  }

  handleScroll(event) {
    let scrollTop = event.refs.DescContainer.scrollTop;
    // this._handleScroll(scrollTop);
    console.log('1111111111',scrollTop)
  }
  changeSpanCurrent = (index,el) => {
    console.log('changeSpanCurrent')
    this.setState({
      spanCurrent:index
    })
    // console.log(this.refs)
    this.scroll.scrollToElement(this.refs[el], 500)
    // console.log(this.scroll)
  }
  render () {
    // const { data } = this.props.location.state
    const { allData, headBars, spanCurrent, goodsIndex, sizeIndex, shopNum} = this.state
    console.log(this.props)
    console.log('alldata',this.state.allData)
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
            <div className="DescSwiper bottom" ref='goods'>
              <WingBlank>
                <Carousel
                  infinite
                  dotStyle={{ backgroundColor: '#d3d3d3', marginBottom: '0.5rem', width: '0.15rem', height: '0.15rem' }}
                  dotActiveStyle={{ marginBottom: '0.5rem', width: '0.15rem', height: '0.15rem' }}>
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
              <img src={require('../../image/other/right.png')} alt=""/>
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
            <div className="DescTeachPromt bottom" ref='promt'>
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
                  serverDesc.map((item,index) => (
                    <li key={index}>
                      <img src={item.img} alt=""/>
                      <span>{item.desc}</span>
                    </li>
                  ))
                }
              </ul>
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

      </div>
    )
  }
}
export default Desc