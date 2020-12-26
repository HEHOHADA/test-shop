import styled from 'styled-components'

import { Box } from 'components/ui/styles'
import { mediaQueries } from 'constants/theme'


export const ProductWrapper = styled.div`
  ${ mediaQueries('xs')`
    height:100vh;
  ` } ${ mediaQueries('sm')`
     height: 80vh;
  ` }
`

export const ProductHeader = styled(Box)`
  border-bottom: 1px solid #161b22;
`

export const ProductTitle = styled.h1`
  width: 100%;
  text-align: center;
  opacity: 0.9;
  font-weight: 500;
  font-family: ui-serif, serif;
  font-size: 22px;
  color: ${ props => props.theme.colors.darkGrey };
  margin: 1rem;
`


export const ContentWrapper = styled(Box)`
  margin: 2rem;

  ${ mediaQueries('xs')`
  flex-direction:column;
  align-items:center;
  ` } ${ mediaQueries('md')`
  flex-direction:row;
  align-items:initial;
  ` }
`


export const ProductInfoWrapper = styled(Box)`
  width: 100%;
  flex-direction: column;
  ${ mediaQueries('md')`
  border-left: 1px solid #adb5bd;
  
  margin-left: 1rem;
  ` }

`


export const PriceWrapper = styled(Box)`
  height: 30%;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  ${ mediaQueries('md')`
      margin:0;
  ` }
`

export const PriceTitle = styled.span`
  border-top: 1px solid;
  line-height: 3rem;
  border-bottom: 1px solid ${ props => props.theme.colors.gray };
  border-top: 1px solid ${ props => props.theme.colors.gray };
  height: 3rem;
  text-align: center;
  width: 80%;
`


export const ButtonGroupWrapper = styled(Box)`
  justify-content: center;
  align-items: center;
`

export const Button = styled.button`
  padding: 5px 12px;
  color: white;
  font-size: 16px;
  margin-right: 1rem;
  font-weight: 700;
  background-color: ${ ({theme}) => theme.colors.darkGrey };
  border: 0;
  border-radius: 3px;
  appearance: none;
  cursor: pointer;

  :focus:not(:focus-visible) {
    outline: none;
  }
`

export const InfoText = styled.span`
  margin-right: 5px;
  color: ${ ({theme}) => theme.colors.primary };
  font-size: 15px;
`

export const ProductImage = styled.img`
  height: 500px;

  ${ mediaQueries('xs')`
     width: 250px;
     height: auto;
  ` } ${ mediaQueries('sm')`
     width: 350px;
     height:auto;
  ` }
`
