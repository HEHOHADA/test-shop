import { OFFSET_SCROLL } from 'constants/utils'
import { FilterType, ProductType } from 'types'
import { ProductsActionType } from '../actions/products'


export const initialFilters: FilterType = {
  category: null,
  title: '',
  price: {from: 0, to: 0}
}

const initialState: InitialStateProductsType = {
  products: [],
  filteredProducts: [],
  offsetProducts: [],
  offset: 0,
  loading: true,
  filters: initialFilters,
  error: null
}

export type InitialStateProductsType = {
  products: Array<ProductType>
  offset: number
  filters: FilterType
  filteredProducts: Array<ProductType>
  offsetProducts: Array<ProductType>
  loading: boolean
  error: any | null
}

export default (state: InitialStateProductsType = initialState, action: ProductsActionType): InitialStateProductsType => {
  switch (action.type) {
    case 'SET_LOADING': {
      return {...state, loading: true}
    }
    case 'REMOVE_LOADING': {
      return {...state, loading: false}
    }
    case 'SET_OFFSET': {
      const newOffset = action.offset || state.offset + OFFSET_SCROLL
      if (state.filteredProducts.length > newOffset - OFFSET_SCROLL) {
        return {
          ...state,
          offset: newOffset,
          offsetProducts: state.filteredProducts.slice(0, newOffset)
        }
      } else {
        return state
      }
    }
    case 'SET_ERROR': {
      return {...state, error: action.error}
    }
    case 'SET_PRODUCTS': {
      return {...state, products: action.products, filteredProducts: action.products}
    }
    case 'SET_FILTERED': {
      return {...state, filteredProducts: action.products}
    }
    case 'SET_FILTERS': {
      return {...state, filters: {...initialFilters, ...action.filters}}
    }
    case 'USE_FILTERS': {
      const filteredProducts = state.filteredProducts.filter(value => {
        if (value.title.includes(action.filters.title || '')) {
          if (action.filters.price) {
            return value.price > (action.filters.price.from || -1) && value.price < (action.filters.price.to || Infinity)
          }
          return true
        }
        return false
      })

      return {...state, filteredProducts}
    }
    default:
      return state
  }
}
