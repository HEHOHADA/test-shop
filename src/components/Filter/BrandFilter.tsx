import React, { FC, useState } from 'react'
import { CloseWrapper, FilterContainer, LabelText } from './styles'
import { Radio } from 'components/utils/Radio'
import { Box } from 'components/ui/styles'
import { ProductCategoryType } from 'types'
import { DirectionIcon } from '../ui/DirectionIcon'

const categories: Array<ProductCategoryType> = ['electronics', 'jewelery', 'women clothing', 'men clothing']

type PropsType = {
  category: ProductCategoryType | null
  onChange: (e: React.FormEvent<HTMLDivElement>) => void
}

export const BrandFilter: FC<PropsType> = ({onChange, category}) => {
  const [show, setShow] = useState<boolean>(true)

  return (
    <Box direction={ 'column' }>
      <FilterContainer>
        <Box>
          <LabelText>Бренд</LabelText>
          <CloseWrapper onClick={ () => setShow(prev => !prev) }>
            <DirectionIcon up={ show }/>
          </CloseWrapper>
        </Box>
      </FilterContainer>
      { show && categories.map(value => (
        <FilterContainer key={ value }>
          <Radio name={ 'category' } onChange={ onChange } current={ category }
                 value={ value }>{ value }</Radio>
        </FilterContainer>
      )) }
    </Box>
  )
}
