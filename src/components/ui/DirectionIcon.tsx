import React, { FC } from 'react'

const UpPath = <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" fill="white"/>
const DownPath = <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" fill="white"/>

type DirectionIconType = {
  up: boolean
}

export const DirectionIcon: FC<DirectionIconType> = (up) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24"
         width="24">
      <path d="M0 0h24v24H0z" fill="none"/>
      { up ? UpPath : DownPath }
    </svg>)
}
