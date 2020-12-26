import React, { FC } from 'react'
import { ContentWrapper, InfoText } from './styles'

type PropsType = {
  name: string
  value: string
}
export const AdditionInfo: FC<PropsType> = ({name, value}) => {
  return (
    <ContentWrapper>
      <InfoText>{ name }</InfoText>
      <span>{ value }</span>
    </ContentWrapper>
  )
}
