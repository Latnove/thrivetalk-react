import React from 'react'
import styled from 'styled-components'

const Item = styled.div`
  width: 240px;
  @media (max-width: 1440px) {
    width: 17vw;
  }
  @media (max-width: 992px) {
    width: 18vw;
  }
  @media (max-width: 768px) {
    width: 33%;
  }
  @media (max-width: 544px) {
    width: 200px;
  }
`
const Title = styled.h4`
  font-size: 14px;
  line-height: 1.1em;
  letter-spacing: -0.006em;
  color: var(--color-dark-blue);
  text-transform: uppercase;
  margin: 0 0 50px 0;
  @media (max-width: 1440px) {
    margin: 0 0 45px 0;
  }
  @media (max-width: 1200px) {
    margin: 0 0 25px 0;
  }
  @media (max-width: 992px) {
    margin: 0 0 20px 0;
  }
  @media (max-width: 768px) {
    display: block;
    text-align: center;
    margin: 0 auto 20px;
  }
  @media (max-width: 544px) {
    margin: 0 auto 13px;
  }
`

export default function FooterInfoItem({ children, text }) {
  return (
    <Item>
      <Title>{text}</Title>
      {children}
    </Item>
  )
}
