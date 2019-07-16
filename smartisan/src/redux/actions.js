import { ADD_GOODS, DELETE_GOODS, UPDATE_GOODS } from './action-types'

export const addGoods = (goods) => ({ type: ADD_GOODS, data: goods })
export const deleteGoods = (goods) => ({ type: DELETE_GOODS, data: goods })
export const updateGoods = (goods) => ({ type: UPDATE_GOODS, data: goods })