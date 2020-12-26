import React, { FC } from 'react'
import { ProductCategoryType } from 'types'
import { Input, Label, Mark, RadioWrapper } from './styles'

type PropsType = {
  name: string
  current: ProductCategoryType | null
  value: string
  onChange: (e: any) => void
}

export const Radio: FC<PropsType> = ({
                                       name,
                                       current,
                                       children,
                                       value, onChange
                                     }) => (
  <RadioWrapper>
    <Label>
      <Input
        onChange={ onChange }
        checked={ value === current }
        name={ name } value={ value } type="radio"/>
      <Mark/>
      { children }
    </Label>
  </RadioWrapper>
)
