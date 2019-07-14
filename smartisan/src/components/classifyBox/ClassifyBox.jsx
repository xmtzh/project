import React from 'react'

import './ClassifyBox.styl'

class ClassifyBox extends React.Component{
  state = {
    width:1,
    display_name:'',
    class_name:''
  }
  componentDidMount() {
    let display = ''
    if (!this.props.right) {
      display='none'
    }
    this.setState({
      width:this.props.width || 1,
      display_name: display || '',
      class_name: this.props.class_name
    })
  }

  render () {
    // console.log(this.props.data)
    return (
      <div className="ClassifyBox">
        <div className="ClassifyBox_title">
          <span>{this.props.data.title}</span>
        </div>
        <div className="ClassifyBox_titleImg">
          <img src={this.props.data.titleImg} alt=""/>
        </div>
        <div className="ClassifyBox_container">
          <ul className={this.state.class_name}>
            {
              this.props.data.items.map((item, index) => (
                <li key={index} >
                  <div className="imgbox">
                    <img className="icon" src={item.img} alt=""
                      style={{ width: `${this.state.width}rem`, height: `${this.state.width}rem` }} />
                  </div>
                  <span>{item.name}</span>
                  <img className="right" src={require("../../image/other/right.png")} alt=""
                    style={{ display: this.state.display_name}}/>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
}
export default ClassifyBox