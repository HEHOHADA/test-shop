import React from 'react'
import { useSelector } from 'react-redux'

import { AppStateType } from 'store'
import { ProductCard } from './ProductCard'
import { ProductsContainer } from './styles'
import { Spinner } from 'components/ui/styles'
import { ErrorElement } from 'components/ui/Error'
import { InitialStateProductsType } from 'store/reducers/products'

type ProductsPageType = Partial<InitialStateProductsType>

export const Products = () => {
  const {
    offsetProducts,
    loading,
    error
  } = useSelector<AppStateType>(state => state.products) as ProductsPageType

  return (
    <ProductsContainer>
      { error ? <ErrorElement/> :
        loading ? <Spinner/> :
          offsetProducts!.map(item => (
            <ProductCard key={ item.id } { ...item }/>
          )) }
    </ProductsContainer>
  )
}
