import * as querystring from 'querystring'
import { useHistory } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppStateType } from 'store'
import { Box } from 'components/ui/styles'
import { BrandFilter } from './BrandFilter'
import { PriceFilter } from './PriceFilter'
import { setFilters } from 'store/actions/products'
import { initialFilters } from 'store/reducers/products'
import { FilterType, ProductCategoryType } from 'types'
import { ButtonWrapper, FilterButton, SearchInput } from './styles'

export const Filter = () => {
  const dispatch = useDispatch()
  const selector = useSelector<AppStateType>(state => state.products.filters) as FilterType
  const history = useHistory()
  useEffect(() => {
    if (selector.price) {
      setPrice(selector.price)
    }
    if (selector.title) {
      setTitle(selector.title)
    }
    if (selector.category) {
      setCategory(selector.category)
    }
  }, [dispatch, selector.price, selector.category, selector.title])

  const [price, setPrice] = useState({from: 0, to: 0})
  const [category, setCategory] = useState<ProductCategoryType | null>(null)
  const [title, setTitle] = useState('')

  const onPriceChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPrice(prev => ({...prev, [e.target.name]: e.target.value}))
  const onCategoryChangeHandler = (e: any) =>
    setCategory(e.target.value)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let queryRes: any = {}

    const priceChecker = !!price.to || !!price.from
    if (priceChecker) {
      queryRes = {...price}
    }
    if (category) {
      queryRes.category = category
    }
    if (title) {
      queryRes.title = title
    }
    const categoryCheck = category ?? {}
    const filters = {categoryCheck, price, title}
    const query = querystring.stringify(queryRes)
    history.replace({
      search: `?${ query }`
    })
    console.log('filters', filters)
    dispatch(setFilters(filters))
  }

  const onClear = () => {
    dispatch(setFilters(initialFilters))
    setPrice(initialFilters.price!)
    setTitle(initialFilters.title!)
    setCategory(initialFilters.category)
    history.replace({
      search: ''
    })
  }

  return (
    <>
      <SearchInput value={ title } onChange={ (e) => setTitle(e.target.value) }
                   placeholder="Поиск"/>
      <Box direction={ 'column' }>
        <form onSubmit={ onSubmit }>
          <PriceFilter price={ price } onChange={ onPriceChangeHandler }/>
          <BrandFilter category={ category } onChange={ onCategoryChangeHandler }/>
          <ButtonWrapper>
            <FilterButton primary type="submit">Search</FilterButton>
            <FilterButton type="button" onClick={ onClear }>Clear</FilterButton>
          </ButtonWrapper>
        </form>
      </Box>
    </>
  )
}
