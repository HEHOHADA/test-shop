import { ProductType } from 'types'
import { ProductActionType } from 'store/actions/product'


const initialState: InitialStateProductType = {
  product: null,
  loading: false,
  error: null
}

export type InitialStateProductType = {
  product: ProductType | null
  error: null
  loading: boolean
}

export default (state: InitialStateProductType = initialState, action: ProductActionType): InitialStateProductType => {
  switch (action.type) {
    case 'SET_LOADING': {
      return {...state, loading: true}
    }
    case 'REMOVE_LOADING': {
      return {...state, loading: false}
    }
    case 'SET_ERROR': {
      return {...state, error: action.error}
    }
    case 'SET_PRODUCT': {
      return {...state, product: action.product}
    }
    default:
      return state
  }
}
