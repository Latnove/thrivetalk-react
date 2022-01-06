import React from 'react'
import styled from 'styled-components'

const BackgroundStyle = styled.div`
  width: 100vw;
  height: 100vh;
  opacity: ${props => props.initialOpacity};
  background-color: ${props => props.backgroundColor};
  position: fixed;
  left: 0;
  top: 0;
  z-index: 50;
  pointer-events: none;
  transition: all 0.6s;
  &._active {
    opacity: ${props => props.finiteOpacity};
    pointer-events: all;
    transition: all 0.6s;
  }
`

export default React.forwardRef(function Background(
  {
    children,
    onClick,
    color = '#000',
    initialOpacity = 1,
    finiteOpacity = 1,
  },
  ref
) {
  return (
    <BackgroundStyle
      ref={ref}
      onClick={onClick}
      backgroundColor={color}
      initialOpacity={initialOpacity}
      finiteOpacity={finiteOpacity}
    >
      {children}
    </BackgroundStyle>
  )
})
