import React from 'react'

import './Mine.styl'
import data from './MineData'
import Head from '../../components/head/Head'
import Card from '../../components/card/Card'
class Mine extends React.Component{
  state = {
    user_avatar:require("../../image/mine/user-avatar.png"),
    user_name:'登录/注册'
  }

  render () {
    return (
      <div className="Mine">
        <Head centerText={'个人中心'} only={true} />
        <div className="MineHead">
          <div className="MineHead_user">
            <img className='user_avatar' src={this.state.user_avatar} alt=""/>
            <span>{this.state.user_name}</span>
            <img className="right" src={require('../../image/other/right.png')} alt=""/>
          </div>
          <div className="MineHead_server">
            <ul>
              {
                data.server.map((item,index) => (
                  <li key={index}>
                    <img src={item.img} alt=""/>
                    <span>{item.text}</span>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        <Card cards={data.card1}/>
        <Card cards={data.card2}/>
        <Card cards={data.card3}/>
        <div></div>
      </div>
    )
  }
}
export default Mine