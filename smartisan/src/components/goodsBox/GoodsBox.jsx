import React from 'react'

import './goodsBox.styl'

class GoodsBox extends React.Component{
  state = {
    width:0,
    class:''
  }
  componentDidMount() {
    this.setState({
      class: this.props.class,
      width:this.props.imgWidth || 3.5
    })
  }
  render () {
    console.log(this.props)
    return (
      <div className="goodsBox">
        <div className="goodsBox_title">
          <span>{this.props.data.title}</span>
          <img src={require("../../image/other/right.png")} alt=""/>
        </div>
        <div className="goodsBox_container">
          <ul className={this.state.class}>
            {
              this.props.data.items.map((item,index) => (
                <li key={index} >
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
export default GoodsBox