import React from 'react'
import styled from 'styled-components'

const LinkStyle = styled.a`
  color: #22356f;
  font-size: 15px;
  font-family: 'Larsseit';
  text-decoration: none;
  padding: 0.2142em 0.3571em 0.7142em 0.3571em;
  @media (min-width: 768px) {
    &:hover {
      border-bottom: 1px solid #22356f;
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

export default React.memo(function Link({ value, linkText, scrollBlock }) {
  const clickLink = event => {
    event.preventDefault()
    const scrollToBlock = document.getElementById(scrollBlock)

    const scrollValue =
      scrollToBlock.getBoundingClientRect().top +
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
    <li>
      <LinkStyle href="/#" onClick={e => clickLink(e)}>
        {linkText}
      </LinkStyle>
    </li>
  )
})
