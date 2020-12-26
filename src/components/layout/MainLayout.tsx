import React, { FC } from 'react'
import { MainContainer } from '../ui/styles'

export const MainLayout: FC = ({children}) => {
  return (
    <MainContainer>
      { children }
    </MainContainer>
  )
}
