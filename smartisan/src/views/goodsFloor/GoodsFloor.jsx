import React from 'react'

import './GoodsFloor.styl'
import Head from '../../components/head/Head'
import GoodsBox from '../../components/goodsBox/GoodsBox'

class GoodsFloor extends React.Component{
  state = {
    // data:{}
  }
  // componentWillMount() {
  //   this.setState({
  //     data: this.props.location.state.data
  //   })
  // }

  render () {
    const { data } = this.props.location.state
    console.log(this.props.location.state.data)
    return (
      <div className="GoodsFloor">
        <Head centerText={data.title} leftGOback={true} />
        <GoodsBox data={data} class={'itemColumn'} display_name={'none'}/>
      </div>
    )
  }
}
export default GoodsFloor