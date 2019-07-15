import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
  Redirect, NavLink
} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './Main.styl';
import data from './MainData'
import Classify from '../classify/Classify'
import Home from '../home/Home'
import Shop from '../shop/Shop'
import Mine from '../mine/Mine'
import GoodsFloor from '../goodsFloor/GoodsFloor'

class Main extends React.Component{
  state = {
    currentIndex: 0
  }
  active = (index) => {
    this.setState({currentIndex:index})
  }
  // shouldComponentUpdate() {
  //   console.log('-----')
  // }
  componentWillReceiveProps(nextProps) {
    console.log('新来的',nextProps)
    for (let i = 0; i < data.navBar.length; i++) {
      if (nextProps.location.pathname === data.navBar[i].path) {
        this.setState({
          currentIndex: i
        })
      }
    }
  }
  componentWillMount() {
    console.log(this.props,'调用了Main组件')
    // 判断当前路由 来 匹配 对应的 tababr
    console.log(this.props.location.pathname)
    for (let i = 0; i < data.navBar.length;i++) {
      if(this.props.location.pathname === data.navBar[i].path) {
        this.setState({
          currentIndex:i
        })
      }
    }

  }
  render () {
    const { currentIndex } = this.state
    console.log(this.state.currentIndex)
    return (
      <div>
        <div className="Main_navBar">
          {
            data.navBar.map((navbar,index) => (
              <NavLink
              key={index}
              className={`Main_navBar_item ${index === currentIndex?"active":""}`}
              to={navbar.path}
              onClick={() => this.active(index)}>
                <img src={index === currentIndex?navbar.iconT:navbar.icon} alt=""/>
                <span>{navbar.text}</span>
              </NavLink>
            ))
          }
        </div>
        <div className="Main_container">
          <Switch>
            <Route path="/main/mine" component={Mine} />
            <Route path="/main/home" component={Home} />
            <Route path="/main/classify" component={Classify} />
            <Route path="/main/shop" component={Shop} />
            <Route path="/main/goodsFloor" component={GoodsFloor} />
            {/* <Redirect from="/main" to="/main/mine" /> */}
          </Switch>
        </div>
      </div>
    )
  }
}

export default withRouter(Main)
