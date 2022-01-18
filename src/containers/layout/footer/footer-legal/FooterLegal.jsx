import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Container } from '../../../../components'
import scrollAnimation from '../../../../components/utilities/scrollAnimation.js'

const Inner = styled.div`
  background-color: var(--color-blue);
`

const Content = styled.ul`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.006em;
  list-style: none;
  padding: 30px 0 30px 0;
  opacity: 0;
  &._active-anim {
    opacity: 1;
    transition: opacity 1.2s ease 0.5s;
  }
  & > li {
    padding: 0 0 0 17px;
    position: relative;
  }
  & > li::before {
    content: '©';
    font-size: inherit;
    position: absolute;
    left: 0;
    top: 60%;
    transform: translate(0, -50%);
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    padding: 25px 0 25px 0;
  }
  @media (max-width: 544px) {
    padding: 22px 0 22px 0;
  }
  @media (max-width: 320px) {
    font-size: 13px;
    padding: 18px 0 18px 0;
  }
`

export default function FooterLegal() {
  useEffect(() => {
    const animItems = document.querySelectorAll('.footer-legal-anim')
    scrollAnimation(animItems)
  }, [])

  return (
    <Inner>
      <Container>
        <Content className="footer-legal-anim">
          <li>Copyright - ThriveTalk 2022</li>
        </Content>
      </Container>
    </Inner>
  )
}
