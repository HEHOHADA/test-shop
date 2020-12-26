import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { AppStateType } from 'store'
import { Product } from 'components/Product'
import { ErrorElement } from '../components/ui/Error'
import { fetchProductById } from 'store/actions/product'
import { MainLayout } from 'components/layout/MainLayout'
import { InitialStateProductType } from 'store/reducers/product'
import { CenteredContainer, Spinner } from 'components/ui/styles'

type ParamsType = {
  id: string
}

export const ProductPage = () => {
  const dispatch = useDispatch()
  const params = useParams<ParamsType>()
  useEffect(() => {
    dispatch(fetchProductById(+params.id))
  }, [dispatch, params.id])
  const {
    loading,
    product,
    error
  } = useSelector<AppStateType>(state => state.product) as InitialStateProductType

  return (
    <MainLayout>
      <CenteredContainer>
        { loading ? <Spinner/> : error ? <ErrorElement/> :
          product && <Product { ...product }/>
        }
      </CenteredContainer>
    </MainLayout>
  )
}
