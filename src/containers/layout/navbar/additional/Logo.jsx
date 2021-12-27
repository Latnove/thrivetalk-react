import React from 'react'
import styled from 'styled-components'
import { SiteLogo } from '../../../../components'

const HeaderLogo = styled(SiteLogo)`
  position: relative;
  left: 0;
  z-index: 3;
  transition: color 0.3s;
  @media (min-width: 768px) {
    &._logo-active:hover {
      color: rgb(32, 176, 243);
      cursor: pointer;
    }
  }
  @media (max-width: 768px) {
    margin-left: 15px;
  }
  @media (max-width: 320px) {
    font-size: 24px;
  }
`

export default React.memo(function Logo({ value }) {
  const clickLogo = zeroPosition => {
    if (
      !value.nav.current.classList.contains('_burger-menu-active') ||
      value.isMenuOpen.current === false
    ) {
      zeroPosition = 0

      window.scrollTo({
        top: zeroPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <HeaderLogo ref={value.logo} onClick={clickLogo}>
      Thrivetalk
    </HeaderLogo>
  )
})
