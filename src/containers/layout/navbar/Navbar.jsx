import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Logo, Link, ContactButton, Burger } from './'
import { Container } from '../../../components'

const Header = styled.header`
  width: 100%;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  &._header-scroll::before,
  &._burger-menu-active::before {
    background-color: var(--color-navbar);
  }
  &::before {
    content: '';
    width: 100%;
    height: 100%;

    position: absolute;

    top: 0;
    left: 0;
    z-index: 2;
    transition: all 0.3s;
  }
  @media (max-width: 544px) {
    &::before {
      background-color: rgb(254, 255, 182);
    }
  }
`
const HeaderBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100%;
  position: relative;
  @media (max-width: 992px) {
    height: 80px;
  }
  @media (max-width: 768px) {
    height: 60px;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
  @media (max-width: 320px) {
    height: 50px;
  }
`
const Menu = styled.nav`
  text-align: center;
  margin: 0 auto;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 280px;
    height: 100%;
    text-align: initial;
    background-color: var(--color-menu-burger);
    padding: 60px 0px 0px 0px;
    position: fixed;
    top: 0;
    left: -300px;

    /* Добавляем "как-бы" границы для меню */
    border-right: 1px solid rgb(133, 0, 133);
    border-left: 1px solid rgb(133, 0, 133);
    transition: left 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    overflow: auto; /* Самое важное */

    &._active {
      left: 0;
    }
  }
  @media (max-width: 544px) {
    width: 220px;
    left: -240px;
  }
  @media (max-width: 320px) {
    padding-top: 50px;
    width: 190px;
    left: -220px;
  }
`
const List = styled.ul`
  display: flex;
  padding: 0;
  gap: 16px;
  position: relative;
  z-index: 3;
  & > li {
    list-style: none;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
    & > li {
      height: 44px;
      /* Сделал в виде таблицы */
      background-color: var(--color-menu-burger-link);
      border-top: 1px solid rgb(133, 0, 133);
      border-bottom: 0;
      border-left: 0;
      border-right: 0;
      position: relative;
    }
    &:last-of-type {
      border-bottom: 1px solid rgb(133, 0, 133);
    }
    & > li:hover {
      background-color: rgb(255, 248, 143);
    }
  }
`

export default function Navbar() {
  const isMenuOpen = useRef(false)

  const navRef = useRef(null)
  const logoRef = useRef(null)
  const menuRef = useRef(null)
  const burgerRef = useRef(null)
  const listRef = useRef(null)

  const stateObjects = {
    nav: navRef,
    logo: logoRef,
    menu: menuRef,
    burger: burgerRef,
    isMenuOpen: isMenuOpen,
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollCheck)
    document.addEventListener('DOMContentLoaded', scrollCheck)

    return () => {
      window.removeEventListener('scroll', scrollCheck)
      document.removeEventListener('DOMContentLoaded', scrollCheck)
    }
  }, [])

  function scrollCheck() {
    let scrollY = window.scrollY

    if (scrollY > 0) {
      navRef.current.classList.add('_header-scroll')

      if (!logoRef.current.classList.contains('_logo-active')) {
        logoRef.current.classList.add('_logo-active')
      }
    } else {
      navRef.current.classList.remove('_header-scroll')
      logoRef.current.classList.remove('_logo-active')
    }
  }

  return (
    <Header ref={navRef}>
      <Container>
        <HeaderBody>
          <Logo value={stateObjects} />

          <Burger value={stateObjects} />

          <Menu ref={menuRef}>
            <List ref={listRef}>
              <li>
                <Link
                  linkText="Home"
                  value={stateObjects}
                  blockId="intro"
                />
              </li>
              <li>
                <Link
                  linkText="About"
                  value={stateObjects}
                  blockId="about"
                />
              </li>
              <li>
                <Link
                  linkText="Services"
                  value={stateObjects}
                  blockId="services"
                />
              </li>
              <li>
                <Link
                  linkText="Blog"
                  value={stateObjects}
                  blockId="blog"
                />
              </li>
            </List>

            <ContactButton
              activity={'none'}
              blockId="contact-us"
              value={stateObjects}
            />
          </Menu>
          <ContactButton blockId="contact-us" value={stateObjects} />
        </HeaderBody>
      </Container>
    </Header>
  )
}
