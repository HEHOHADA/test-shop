import styled from 'styled-components'

export const RadioWrapper = styled.div`
  margin-bottom: 1em;
  display: flex;
  align-content: center;
  animation: anim .2s ease-out forwards;

  :hover {
    opacity: 0.8;
  }
  :defined{
    animation: anim .2s ease-out forwards; 
  }
`

export const Mark = styled.span`
  display: inline-block;
  position: relative;
  border: 1px solid #777777;
  width: 14px;
  height: 14px;
  left: 0;
  bottom: -5px;
  border-radius: 50%;
  margin-right: 5px;
  vertical-align: middle;

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-radius: 50%;
    border-color: ${ props => props.theme.colors.primary };
    background-color: ${ props => props.theme.colors.primary };
    opacity: 0;
    left: 50%;
    top: 50%;
    position: absolute;
    transition: all 110ms;
  }
`

export const Input = styled.input`
  position: absolute;
  visibility: hidden;
  display: none;

  &:checked + ${ Mark } {
    &::after {
      width: 10px;
      height: 10px;
      opacity: 1;
      left: 9%;
      top: 5%;
    }
  }
`

export const Label = styled.label`
  display: flex;
  color: ${ props => props.theme.colors.light };
  cursor: pointer;
  padding: 5px 10px 5px 0;
  position: relative;
`
