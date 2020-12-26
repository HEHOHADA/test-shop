import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Box } from 'components/ui/styles'
import { mediaQueries } from 'constants/theme'

export const ProductsContainer = styled(Box)`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-wrap: wrap;
`

export const StyledLink = styled(Link)`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  height: 100%;
  backface-visibility: hidden;
  color: black;
  padding-top: 1rem;
  text-decoration: none;
  transition: all .25s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  ${ mediaQueries('xs')`
    width: 100%;
  ` } ${ mediaQueries('md')`
    width: 50%;
  ` } ${ mediaQueries('lg')`
    width: 33%;
  ` }

`
export const ProductPrice = styled.p`
  color: grey;
  font-size: 15px;
`

export const CardHelperWrapper = styled.div`
  padding: 12px 8px;
  width: 100%;
  width: -moz-available;
  width: -webkit-fill-available;
  width: fill-available;
`

export const ProductTitle = styled.span`
  display: block;
  margin-top: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`


export const ImageProducts = styled.img`
  max-width: 300px;

  ${ mediaQueries('lg')`
  max-width:230px;
  ` }
`
