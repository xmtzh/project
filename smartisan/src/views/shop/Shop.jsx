import React from 'react'
import {Link,Route} from 'react-router-dom'

import Head from '../../components/head/Head'
import Desc from '../desc/Desc'
import './Shop.styl'


class Shop extends React.Component{
  state = {

  }
  login = () => {
    this.props.history.push('/desc')
  }
  goHome = () => {
    this.props.history.push('/main/home')
  }
  render () {
    return (
      <div className="Shop">
        <Head centerText={'购物车'} only={true}/>
        <div className="ShopContainer">
          <img src={require('../../image/tabBar/shop.png')} alt="" />
          <span className="one">购物车暂无商品</span>
          <span className="two">添加到购物车的商品将会显示在这里</span>
          <div className="ShopContainer_btn">
            <button className='login' onClick={this.login}>登录</button>
            <button className='goHome' onClick={this.goHome}>现在选购</button>
          </div>
        </div>
      </div>
    )
  }
}
export default Shop