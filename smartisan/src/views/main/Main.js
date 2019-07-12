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

class Main extends React.Component{
  state = {
    currentIndex: 0
  }
  active = (index) => {
    localStorage.setItem("Index", index);
    this.setState({currentIndex:index})
  }
  componentDidMount() {
    console.log(this.props)
  }
  render () {
    const { currentIndex } = this.state
    return (
      <Router>

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
            <Route path="/home" component={Home} />
            <Route path="/classify" component={Classify} />
            <Route path="/shop" component={Shop} />
            <Route path="/mine" component={Mine} />
          </Switch>
          {/* <Redirect to="/home" /> */}
        </div>
      </Router>
    )
  }
}

export default withRouter(Main)
