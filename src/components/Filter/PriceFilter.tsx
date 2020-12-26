import React, { FC } from 'react'
import { FilterContainer, InputsContainer, InputWrapper, LabelText, PriceInput } from './styles'

type PropsType = {
  price:{from: number, to:number},
  onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void
}

export const PriceFilter: FC<PropsType> = ({price, onChange}) => {

  return (
    <FilterContainer>
      <LabelText>Цена</LabelText>
      <InputsContainer>
        <InputWrapper>
          <PriceInput
            onChange={ onChange }
            type="number"
            value={ price.from } name="from" placeholder="From"/>
        </InputWrapper>
        <InputWrapper>
          <PriceInput
            value={ price.to }
            type="number"
            onChange={ onChange }
            name="to"
            placeholder="To"/>
        </InputWrapper>
      </InputsContainer>
    </FilterContainer>
  )
}
