import React, { useRef } from 'react'
import styled from 'styled-components'

const BurgerMenu = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
  @media (max-width: 768px) {
    display: block;
    width: 30px;
    height: 20px;
    margin-right: 15px;

    position: relative;
    z-index: 3;

    & span {
      background-color: #22356f;
      position: absolute;
      left: 0;
      top: 9px;
    }
    & span::before,
    & span::after {
      content: '';
      background-color: #22356f;
      position: absolute;
      left: 0;
    }
    & span::before {
      top: 8px;
      transition: top 0.3s 0.3s,
        transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    }
    & span::after {
      bottom: 8px;
      transition: bottom 0.3s 0.3s,
        transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    }
    & span,
    & span::before,
    & span::after {
      width: 100%;
      height: 2px;
    }

    /* ------------------------------------ */
    /* ------------- Анимации ------------- */
    /* ------------------------------------ */
    &._active span:before {
      content: '';
      top: 0px;
      transform: rotate(45deg);
      transition: top 0.3s,
        transform 0.3s 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
    &._active span:after {
      content: '';
      bottom: 0;
      transform: rotate(-45deg);
      transition: bottom 0.3s,
        transform 0.3s 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
    &._active span {
      background: rgba(255, 255, 255, 0);
    }
  }
`

export default React.memo(function Burger({ value }) {
  const fadeDelay = useRef(null)

  function removeBackground() {
    fadeDelay.current = setTimeout(() => {
      value.nav.current.classList.remove('_burger-menu-active')
    }, 400)
  }

  const clickBurger = () => {
    if (
      (!value.nav.current.classList.contains('_burger-menu-active') &&
        window.scrollY <= 0) ||
      value.isMenuOpen.current === false
    ) {
      value.isMenuOpen.current = true
      value.nav.current.classList.add('_burger-menu-active')

      clearTimeout(fadeDelay.current)
    } else if (value.isMenuOpen.current === true) {
      value.isMenuOpen.current = false
      removeBackground()
    }

    value.burger.current.classList.toggle('_active')
    value.menu.current.classList.toggle('_active')
    document.body.classList.toggle('_lock')
  }

  return (
    <BurgerMenu ref={value.burger} onClick={clickBurger}>
      <span></span>
    </BurgerMenu>
  )
})
