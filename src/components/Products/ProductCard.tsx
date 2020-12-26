import React, { FC } from 'react'

import { ProductType } from 'types'
import { CardHelperWrapper, ImageProducts, ProductPrice, ProductTitle, StyledLink } from './styles'


type PropsType = Pick<ProductType, 'id' | 'price' | 'title' | 'category' | 'image'>

export const ProductCard: FC<PropsType> = ({id, title, image, category, price}) => {
  return (
    <StyledLink to={ `/product/${ id }` }>
      <ImageProducts src={ image } alt={ title }
                     height="250"/>
      <CardHelperWrapper>
        <div>{ category }</div>
        <ProductTitle>{ title }</ProductTitle>
        <ProductPrice>{ price }$</ProductPrice>
      </CardHelperWrapper>
    </StyledLink>
  )
}
