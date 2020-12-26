import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import React, { useCallback, useEffect, useRef } from 'react'

import { Filter } from 'components/Filter'
import { Products } from 'components/Products'
import { convertQueryParamsToData } from 'utils'
import { SwapIcon } from 'components/ui/SwapIcon'
import { MainLayout } from 'components/layout/MainLayout'
import {
  CenteredContainer,
  FilterText,
  FilterTextWrapper,
  FlexContainer,
  SidebarContainer,
  StyledIconWrapper
} from 'components/ui/styles'
import { fetchProducts, productsActions, setFilters } from 'store/actions/products'

export const ProductsPage = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const ref = useRef<HTMLDivElement>(null)
  const onLoadMOre = useCallback(() => {
    if (ref.current) {
      if (ref.current.scrollTop + window.innerHeight + 50 >= ref.current.scrollHeight) {
        dispatch(productsActions.increaseOffset())
      }
    }
  }, [dispatch, ref])

  useEffect(() => {
    if (location.search) {
      const filters = convertQueryParamsToData(location.search)
      dispatch(setFilters(filters))
    } else {
      dispatch(fetchProducts(true))
    }
  }, [dispatch, location])

  return (
    <MainLayout>
      <FlexContainer>
        <SidebarContainer>
          <FilterTextWrapper>
            <FilterText>Filter</FilterText>
            <StyledIconWrapper>
              <SwapIcon/>
            </StyledIconWrapper>
          </FilterTextWrapper>
          <Filter/>
        </SidebarContainer>
        <CenteredContainer ref={ ref } onScroll={ onLoadMOre }>
          <Products/>
        </CenteredContainer>
      </FlexContainer>
    </MainLayout>
  )
}
