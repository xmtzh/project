import React from 'react'
import { withRouter } from 'react-router-dom'

import './goodsBox.styl'

class GoodsBox extends React.Component{
  state = {
    width:0,
    class:'',
    display_name:''
  }
  componentDidMount() {
    this.setState({
      class: this.props.class,
      width:this.props.imgWidth || 3.5,
      display_name: this.props.display_name || ''
    })
  }
  gofloor = () => {
    const { data } = this.props
    console.log(this)
    this.props.history.push({ pathname: '/main/goodsFloor', state: { data }})
    // this.props.history.push('/main/goodsFloor')
  }
  goDesc = (id) => {
    this.props.history.push({ pathname: '/desc', state: { id:id } })
  }
  render () {
    return (
      <div className="goodsBox">
        <div className="goodsBox_title" onClick={this.gofloor}>
          <span>{this.props.data.title}</span>
          <img
            style={{ display: this.state.display_name }}
            src={require("../../image/other/right.png")} alt=""/>
        </div>
        <div className="goodsBox_container">
          <ul className={this.state.class}>
            {
              this.props.data.items.map((item,index) => (
                <li key={index} onClick={()=>{this.goDesc(item.id)}}>
                  <img
                  style={{ width: `${this.state.width}rem`, height: `${this.state.width}rem`}}
                  src={item.img} alt=""/>
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
    )
  }
}
export default withRouter(GoodsBox)