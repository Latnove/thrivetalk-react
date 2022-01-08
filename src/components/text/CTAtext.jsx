import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
  color: ${props => props.color};
  font-size: 36px;
  font-weight: 700;
  line-height: 1.472em;
  letter-spacing: -0.01em;
  @media (max-width: 1440px) {
    font-size: 33px;
  }
  @media (max-width: 1200px) {
    font-size: 30px;
  }
  @media (max-width: 768px) {
    font-size: 28px;
  }
  @media (max-width: 544px) {
    font-size: 23px;
  }
  @media (max-width: 320px) {
    font-size: 20px;
  }
`

export default function CTAText({ children, color = '#000' }) {
  return <Text color={color}>{children}</Text>
}
