import { combineReducers } from 'redux'
import product from './product'
import products from './products'

export default combineReducers({
  products,
  product
})
