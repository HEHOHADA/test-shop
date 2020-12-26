import styled, { keyframes } from 'styled-components'

import { BoxType } from 'types'
import { mediaQueries } from 'constants/theme'

export const MainContainer = styled.main`
  padding: 0;
  height: 100vh;
  width: 80vw;
  max-width: 100%;
  margin: 10rem auto 0;

  ${ mediaQueries('xs')`
    width:100%;
    margin:0;
  ` } ${ mediaQueries('sm')`
     width: 80vw;
     margin: 10rem auto 0; 
  ` }
`

export const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-height: calc(80% + 1rem);
  ${ mediaQueries('xs')`
    max-height:100%;
  ` } ${ mediaQueries('sm')`
     max-height: calc(80% + 1rem);
  ` }
  border-radius: 10px;
  border: 1px solid ${ props => props.theme.colors.secondary };
`

export const SidebarContainer = styled.div`
  width: 20%;
  position: relative;
  height: 100%;
  background-color: ${ props => props.theme.colors.dark };
  ${ mediaQueries('xs')`
      display:none; 
  ` } ${ mediaQueries('sm')`
      display:none; 
  ` } ${ mediaQueries('md')`
      width:20%;
      display:block;
  ` }
`

export const CenteredContainer = styled.div`
  width: 80%;
  background-color: #fff;
  overflow-y: auto;
  ${ mediaQueries('sm')`
     width:100%; 
  ` } ${ mediaQueries('xs')`
     width:100%; 
  ` }
`


export const Box = styled.div<BoxType>`
  display: flex;
  flex-direction: ${ props => props.direction };
`

export const Input = styled.input`
  font-size: 18px;
  color: ${ props => props.theme.colors.gray };
  background: #444446;
  border: none;

  ::placeholder {
    color: #616161;
  }

  :focus {
    outline: none;
  }
`

export const FilterTextWrapper = styled(Box)`
  justify-content: space-between;
`

export const FilterText = styled.h2`
  color: ${ props => props.theme.colors.light };
  margin: 1rem 0 0 1rem;
`

export const StyledIconWrapper = styled.div`
  padding: 1rem;
  cursor: pointer;

  :hover {
    border-radius: 1rem;
    opacity: 0.8;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div`
  animation: ${ rotate360 } 1s linear infinite;
  transform: translateZ(0);
  position: absolute;
  top: 40%;
  left: 50%;
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`

export const ErrorTitle = styled.h1`
  color: red;
  font-size: 20px;
`
