import styled from 'styled-components'
import { Box, Input, StyledIconWrapper } from 'components/ui/styles'

export const PriceInput = styled(Input)`
  padding-left: 12px;
  height: 95%;
  border-radius: 8px;
  outline: none;
  width: calc(100% - 12px);
`

export const InputWrapper = styled.div`
  position: relative;
  border-radius: 8px;
  height: 40px;
  display: inline-block;
  font-size: 14px;
`

export const LabelText = styled.span`
  color: white;
`

export const FilterContainer = styled.div`
  margin: 10px;
`


export const InputsContainer = styled(Box)`
  margin-top: 10px;
`

export const ButtonWrapper = styled(Box)`
  justify-content: center;
  align-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  margin-bottom: 1rem;
`

type ButtonType = {
  primary?: boolean
  big?: boolean
}

export const SearchInput = styled(Input)`
  padding: 10px;
  margin: 10px;
  border-radius: 3px;
  width: 100%;
  width: -moz-available;
  width: -webkit-fill-available;
  width: fill-available;
`

export const FilterButton = styled.button<ButtonType>`
  background: ${ props => props.primary ? props.theme.colors.primary : props.theme.colors.gray };
  border: none;
  width: ${ props => props.big ? '80%' : '40%' };
  border-radius: 8px;
  height: 30px;
  margin: 0 5px;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`

export const CloseWrapper = styled(StyledIconWrapper)`
  padding: 0;
  margin-left: 3px;
`
