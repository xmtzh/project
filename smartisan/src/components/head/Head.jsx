import React from 'react'
import { withRouter } from 'react-router-dom';

import data from './HeadData'
import './Head.styl'

class Head extends React.Component{
  state = {
    isShow:false,
    text:true
  }
  isShowMenu = () => {
    this.setState({ isShow:!this.state.isShow})
    console.log(this.state.isShow)
  }
  newRoute = () => {
    this.setState({ isShow: false })
    this.props.history.push('/main/home')
    console.log(this)
  }
  GOback = () => {
    console.log('返回')
    this.props.history.goBack()
  }
  Promt = () => {
    this.props.changePage()
    this.setState({
      text: !this.state.text
    })
  }
  componentWillMount() {
    window.scrollTo(0, 0)
  }
  render () {
    // console.log(this.props.left, this.props.right, this.props.center, this.props.img)
    const { leftMenu, leftGOback, centerImg, centerText, rightSearch, only,rightPropmt } = this.props
    const { isShow } = this.state
    return (
      <div>
        <div className='head'>
          {/* 左侧菜单按钮 */}
          <div className="headLeft headChild" style={{ display: leftMenu ? "" : "none" }}
          onClick={this.isShowMenu}>
            <img src={require('../../image/head/menu.png')} alt=""/>
          </div>
          {/* 左侧返回按钮 */}
          <div className="headLeft headChild desc" style={{ display: leftGOback ? "" : "none" }}
            onClick={this.GOback}>
            <span>返回</span>
          </div>
          {/* 中间锤子图标 */}
          <div className="headCenter headChild" style={{ display: centerImg ? "" : "none"}}>
            <img src={require('../../image/head/chuizi.png')} alt="" />
          </div>
          {/* 中间文字 */}
          <div
            className={`headCenter headChild ${only ? "allWith" : ""} ${leftGOback ? "desc1":""}`}
            style={{ display: centerText ? "" : "none"}}>
            <span>{centerText}</span>
          </div>
          {/* 右侧搜索按钮 */}
          <div className="headRight headChild" style={{ display: rightSearch ? "" : "none" }}>
            <img src={require('../../image/head/search.png')} alt="" />
          </div>
          {/* 右侧编辑按钮 */}
          <div className="headRight headChild posa" style={{ display: rightPropmt ? "" : "none" }}
            onClick={this.Promt}>
            <span>{this.state.text ? '编辑':'完成'}</span>
          </div>
        </div>
        <div className={`menuBar ${isShow?"active":""}`}>
          <ul>
            {
              data.items.map((item, index) => (
                <li key={index} onClick={this.newRoute}>
                  <img src={item.icon} alt="" />
                  <span>{item.text}</span>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
}
export default withRouter(Head)