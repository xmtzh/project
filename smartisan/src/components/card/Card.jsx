import React from 'react'

import './Card.styl'

class name extends React.Component{
  state = {

  }

  render () {
    const { cards } = this.props
    return (
      <div className="cards">
        <ul>
          {
            cards.map((item,index) => (
              <li key={index}>
                <span>{item.name}</span>
                <img className="right" src={require('../../image/other/right.png')} alt="" />
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}
export default name