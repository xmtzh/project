import React from 'react'
import { Carousel, WingBlank } from 'antd-mobile';

import './Home.styl'
import data from './HomeDate'
import Head from '../../components/head/Head'
import GoodsBox from '../../components/goodsBox/GoodsBox'


class Home extends React.Component{
  state = {
    data: ['1', '2', '3'],
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [
          'https://resource.smartisan.com/resource/h/h51008420.png',
          'https://resource.smartisan.com/resource/fda5c3e61a71c0f883bbd6c76516cd85.png',
          'https://resource.smartisan.com/resource/a/app1008420.png'
        ],
      });
    }, 100);
  }
  render () {
    // console.log(this.props)
    return (
      <div className="home">
        <Head leftMenu={true} centerImg={true} rightSearch={true}/>
        <div className='home_swiper'>
          <WingBlank>
            <Carousel
              autoplay={true}
              infinite
              dotStyle={{ backgroundColor: '#fff' }}>
              {this.state.data.map(val => (
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
        <GoodsBox data={data.hotGoods}/>
        <GoodsBox data={data.dressBags} class={'itemColumn'}/>
        <GoodsBox data={data.breathe} class={'itemTwo'} imgWidth={4.5}/>
        <GoodsBox data={data.parts} class={'itemTwo'} imgWidth={4.5}/>
        <GoodsBox data={data.nutPhoneParts} class={'itemTwo'} imgWidth={4.5}/>
      </div>
    )
  }
}
export default Home