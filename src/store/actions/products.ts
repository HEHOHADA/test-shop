import { api } from 'constants/api'
import { FilterType, ProductType } from 'types'
import { OFFSET_SCROLL } from 'constants/utils'
import { BaseThunkType, InferActionsType } from '../index'
import {
  REMOVE_LOADING,
  SET_ERROR,
  SET_FILTERED,
  SET_FILTERS,
  SET_LOADING,
  SET_OFFSET,
  SET_PRODUCTS,
  USE_FILTERS
} from '../actionTypes'

export type ProductsActionType = InferActionsType<typeof productsActions>

export const productsActions = {
  setLoading: () => ({type: SET_LOADING} as const),
  removeLoading: () => ({type: REMOVE_LOADING} as const),
  setError: (error: any) => ({type: SET_ERROR, error} as const),
  setProducts: (products: Array<ProductType>) => ({type: SET_PRODUCTS, products} as const),
  setFilteredProducts: (products: Array<ProductType>) => ({type: SET_FILTERED, products} as const),
  useFilters: (filters: Pick<FilterType, 'price' | 'title'>) => ({
    type: USE_FILTERS,
    filters
  } as const),
  setFilters: (filters: Partial<FilterType>) => ({type: SET_FILTERS, filters} as const),
  increaseOffset: (offset?: number) => ({type: SET_OFFSET, offset} as const)
}

export const fetchProducts = (inc?: boolean, category?: string | null): BaseThunkType<ProductsActionType> => async dispatch => {
  dispatch(productsActions.setLoading())
  try {
    const response = await fetch(category ? api.PRODUCTS_CATEGORY + category : api.PRODUCTS)
    const data = await response.json() as Array<ProductType>
    category
      ? dispatch(productsActions.setProducts(data))
      : dispatch(productsActions.setFilteredProducts(data))
    inc && dispatch(productsActions.increaseOffset(OFFSET_SCROLL))
  } catch (e) {
    console.log(e)
    dispatch(productsActions.setError(e))
  } finally {
    dispatch(productsActions.removeLoading())
  }
}

export const setFilters = (filters: Partial<FilterType>): BaseThunkType<ProductsActionType> => async (dispatch, getState) => {
  dispatch(productsActions.setFilters(filters))
  if (filters.category) {
    await dispatch(fetchProducts(false, filters.category))
  } else if (!getState().products.products.length) {
    await dispatch(fetchProducts(false))
  }

  dispatch(productsActions.useFilters(filters))
  dispatch(productsActions.increaseOffset(OFFSET_SCROLL))
}
