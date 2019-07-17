import { combineReducers } from 'redux'
import { ADD_GOODS, DELETE_GOODS, UPDATE_GOODS } from './action-types'

const initGoods = []

function shopCart(state = initGoods, action) {
  switch (action.type) {
    case ADD_GOODS:
      return [...state, action.data]
    case UPDATE_GOODS:
      return action.data
    case DELETE_GOODS:
      return action.data
    default:
      return state
  }
}

export default combineReducers({
  shopCart
})