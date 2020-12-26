import { ProductType } from 'types'
import { api } from 'constants/api'
import { BaseThunkType, InferActionsType } from '../index'
import { REMOVE_LOADING, SET_ERROR, SET_LOADING, SET_PRODUCT } from '../actionTypes'

export type ProductActionType = InferActionsType<typeof productActions>

export const productActions = {
  setLoading: () => ({type: SET_LOADING} as const),
  removeLoading: () => ({type: REMOVE_LOADING} as const),
  setError: (error: any) => ({type: SET_ERROR, error} as const),
  setProduct: (product: ProductType) => ({type: SET_PRODUCT, product} as const),
}

export const fetchProductById = (id: number): BaseThunkType<ProductActionType> => async dispatch => {
  dispatch(productActions.setLoading())
  try {
    const response = await fetch(api.PRODUCT + id)
    const data = await response.json() as ProductType
    dispatch(productActions.setProduct(data))
  } catch (e) {
    dispatch(productActions.setError(e))
  } finally {
    dispatch(productActions.removeLoading())
  }
}

