import React from 'react'
import { connect } from 'react-redux'
import { Toast} from 'antd-mobile';

import Head from '../../components/head/Head'
import { deleteGoods, updateGoods } from '../../redux/actions'
import './Shop1.styl'
class Shop1 extends React.Component{
  state = {
    totalCount: 0,
    totalPrice: 0,
    allGoods:[],
    allSelect:false,
    selectedNum:0,
    selectedPrice:0.00,
    changePage:false
  }
  componentWillReceiveProps(nextProps) {
    let totalCount = 0, totalPrice  = 0
    // total 更新后重新更改源数据
    console.log('shop更新', nextProps.total)
    for (let i = 0; i < nextProps.total.length; i++) {
      console.log('receive', nextProps.total[i].num)
      totalCount += nextProps.total[i].num
      totalPrice += nextProps.total[i].num * nextProps.total[i].price
    }
    this.setState({
      allGoods: nextProps.total,
      totalCount,
      totalPrice
    })
    return true
  }
  componentWillMount() {
    let { total } = this.props
    console.log('第二新的', this.props.total)
    let { totalCount, totalPrice } = this.state
    for(let i = 0; i < total.length; i++) {
      // 只要进入页面，就格式化状态
      total[i].select = false
      totalCount += total[i].num
      totalPrice += total[i].num * total[i].price
    }

    this.setState({
      allGoods: total,
      totalCount,
      totalPrice
    })
  }
  changeSelect = (index) => {
    let { allGoods, selectedNum, selectedPrice, totalCount } = this.state
    allGoods[index].select = !allGoods[index].select
    // 判断此时是添加还是删除
    if (allGoods[index].select) {
      selectedNum += allGoods[index].num
      selectedPrice += allGoods[index].num * allGoods[index].price
    }else {
      selectedNum -= allGoods[index].num
      selectedPrice -= allGoods[index].num * allGoods[index].price
    }
    // 判断是否当前的所有选中数量是否等于总数量
    if (selectedNum === totalCount) {
      this.setState({
        allGoods,
        selectedNum,
        selectedPrice,
        allSelect:true
      })
    }else {
      this.setState({
        allGoods,
        selectedNum,
        selectedPrice,
        allSelect: false
      })
    }
  }
  // 编辑还是完成
  changePage = () => {
    let { allGoods} = this.state
    this.setState({
      changePage: !this.state.changePage
    })
    setTimeout(()=>{
      console.log(this.state.changePage)
    },100)
    allGoods.map((goods) => {
      goods.select = false
    })
    this.setState({
      allSelect: false,
      selectedNum: 0,
      selectedPrice: 0,
      allGoods
    })
  }
  // 选中全部
  changeAllSelect = () => {
    let { allGoods,totalCount, totalPrice, allSelect} = this.state
    if (allSelect) {
      allGoods.map((goods) => {
        goods.select = false
      })
      this.setState({
        allSelect:false,
        selectedNum: 0,
        selectedPrice: 0,
        allGoods
      })
    }else {
      allGoods.map((goods) => {
        goods.select = true
      })
      this.setState({
        allSelect: true,
        selectedNum: totalCount,
        selectedPrice: totalPrice,
        allGoods
      })
    }
  }
  // 付款
  payment = () => {
    Toast.success('付款成功了，等着收货吧', 1);
    let { deleteGoods } = this.props
    let { allGoods} = this.state
    console.log(allGoods,'原来的')
    let newtotal = allGoods.filter((goods) => {
      return goods.select === false
    })
    deleteGoods(newtotal)
    this.setState({
      selectedNum:0,
      selectedPrice:0,
      allSelect:false
    })
    if (!newtotal[0]) {
      console.log(this.props)
      this.props.history.push('/main/shop')
    }

  }
  // 删除选中的商品
  delGoods = () => {
    Toast.success('成功删除', 1);
    let { deleteGoods } = this.props
    let { allGoods } = this.state
    console.log(allGoods, '原来的')
    let newtotal = allGoods.filter((goods) => {
      return goods.select === false
    })
    deleteGoods(newtotal)
    this.setState({
      selectedNum: 0,
      allSelect: false
    })
    if (!newtotal[0]) {
      console.log(this.props)
      this.props.history.push('/main/shop')
    }
  }
  // 修改当前的数量
  changeShopNum = (type,index) => {
    let { allGoods } = this.state
    if (type ==='reduce'){
      if (allGoods[index].num <= 1) return
      allGoods[index].num -= 1
    } else if (type === 'add') {
      allGoods[index].num += 1
    }
    this.props.updateGoods(allGoods)
    // this.setState({ allGoods })
  }

  render () {
    const { allGoods, allSelect, selectedNum, selectedPrice, changePage } = this.state
    console.log('当前的购物车',this.state.allGoods)
    console.log('最新的',this.props.total)
    return (
      <div className="Shop1">
        <Head centerText={'购物车'} rightPropmt={true} only={true} changePage={this.changePage}/>
        <div className="shop1Container">
          <ul>
            {
              allGoods.map((goods,index) => (
                <li key={index}>
                  <img
                    onClick={() => this.changeSelect(index)}
                    className="circle"
                    src={goods.select ? require('../../image/other/check.png') : require('../../image/other/yuan.png')} alt=""/>
                  <img src={goods.img} alt=""/>
                  <div className="textPart">
                    <span>{goods.name}</span>
                    <p className="type">
                      <span className='textType'>{goods.type}</span>
                      <span>{goods.size}</span>
                    </p>
                    <p className='price'>
                      <div className="shopNum" style={{ display: `${changePage ? '' : 'none'}` }}>
                        <span onClick={() => { this.changeShopNum('reduce', index)}} className={`btn ${goods.num > 1 ? 'shadow' : ''}`}>
                          <span>-</span>
                        </span>
                        <span>{goods.num}</span>
                        <span onClick={() => { this.changeShopNum('add', index) }} className="btn shadow">
                          <span>+</span>
                        </span>
                      </div>
                      <span className="textPrice">￥{goods.price}</span>
                      <span style={{ display: `${changePage ? 'none' : ''}` }}>x</span>
                      <span style={{ display: `${changePage ? 'none' : ''}` }}>{goods.num}</span>
                    </p>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="shop1Footer">
          <div className="left">
            <img
              onClick={this.changeAllSelect}
              className="circle"
              src={allSelect ? require('../../image/other/check.png') : require('../../image/other/yuan.png')} alt="" />
            <span>已选<b style={{ color: `${changePage ? '#d44d44' : ''}`}}>{selectedNum}</b>件</span>
          </div>
          <div className="right">
            <div className="price" style={{ display: `${changePage ?'none':''}`}}>
              <span className="allPrice">合计: <span>￥{selectedPrice}</span></span>
              <span>应付总额不含运费</span>
            </div>
            <button
            onClick={this.payment }
              style={{ backgroundColor: `${selectedNum > 0 ? '#5e8bdd' : '#a9a9a9'}`, display: `${changePage ? 'none' : ''}` }}>
              现在结算
            </button>
            <button
            onClick={this.delGoods }
              style={{ backgroundColor: `${selectedNum > 0 ? '#d9554c' : '#a9a9a9'}`, display: `${changePage ? '' : 'none'}` }}>
              删除所选
            </button>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  total: state.shopCart
})
const mapDispatchToProps = (dispatch) => ({
  deleteGoods: data => dispatch(deleteGoods(data)),
  updateGoods: data => dispatch(updateGoods(data))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop1)