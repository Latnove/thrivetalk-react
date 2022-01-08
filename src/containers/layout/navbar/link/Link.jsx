import React from 'react'
import styled from 'styled-components'

const LinkStyle = styled.a`
  color: #22356f;
  font-size: 15px;
  font-family: 'Larsseit';
  text-decoration: none;
  padding: 0.2142em 0.3571em 0.7142em 0.3571em;
  position: relative;

  @media (min-width: 768px) {
    &::after {
      content: '';
      width: 100%;
      height: 1px;
      background-color: var(--color-dark-blue);
      transition: 0.4s;
      transform: scale(0);
      transform-origin: left;
      position: absolute;
      left: 0;
      bottom: 0;
    }
    &:hover::after {
      transform: scale(1);
    }
  }
  @media (max-width: 768px) {
    margin: auto 0;
    font-size: 20px;
    padding: 0 0 0 15px;
    width: 100%;
  }
  @media (max-width: 544px) {
    font-size: 16px;
  }
`

export default React.memo(function Link({ value, linkText, blockId }) {
  const handleClick = event => {
    event.preventDefault()
    const scrollBlock = document.getElementById(blockId)

    const scrollValue =
      scrollBlock.getBoundingClientRect().top +
      window.pageYOffset -
      value.nav.current.offsetHeight

    if (value.burger.current.classList.contains('_active')) {
      document.body.classList.remove('_lock')
      value.burger.current.classList.remove('_active')
      value.menu.current.classList.remove('_active')

      value.isMenuOpen.current = false // Так как бургер меню закрывается при переходе
    }
    if (linkText === 'Home') {
      setTimeout(() => {
        value.nav.current.classList.remove('_burger-menu-active')
      }, 400) // Время исчезновения menu
    }

    window.scrollTo({
      top: scrollValue,
      behavior: 'smooth',
    })
  }

  return (
    <LinkStyle href="/#" onClick={e => handleClick(e)}>
      {linkText}
    </LinkStyle>
  )
})
