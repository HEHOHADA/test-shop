import React, { FC, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { ProductType } from 'types'
import { AdditionInfo } from './AdditionInfo'
import { BackIcon } from 'components/ui/BackIcon'
import { StyledIconWrapper } from 'components/ui/styles'
import {
  Button,
  ButtonGroupWrapper,
  ContentWrapper,
  PriceTitle,
  PriceWrapper,
  ProductHeader,
  ProductImage,
  ProductInfoWrapper,
  ProductTitle,
  ProductWrapper
} from './styles'

type ShowType = 'category' | 'description'

export const Product: FC<ProductType> = ({title, image, description, category, price}) => {
  const history = useHistory()
  const [infoShow, setInfoShow] = useState<ShowType>('category')
  return (
    <ProductWrapper>
      <ProductHeader>
        <StyledIconWrapper onClick={ () => history.goBack() }>
          <BackIcon/>
        </StyledIconWrapper>
        <ProductTitle>{ title }</ProductTitle>
      </ProductHeader>
      <ContentWrapper>
        <ProductImage src={ image } alt={ title }/>
        <ProductInfoWrapper>
          <PriceWrapper>
            <PriceTitle>{ price }$</PriceTitle>
          </PriceWrapper>
          <div>
            <ButtonGroupWrapper>
              <Button
                onClick={ () => setInfoShow('category') }>
                Category</Button>
              <Button
                onClick={ () => setInfoShow('description') }>
                Description</Button>
            </ButtonGroupWrapper>

            { infoShow === 'description' ? (
                <AdditionInfo name={ 'Description:' } value={ description }/>
              ) :
              <AdditionInfo name={ 'Category:' } value={ category }/>
            }

          </div>
        </ProductInfoWrapper>
      </ContentWrapper>
    </ProductWrapper>
  )
}
