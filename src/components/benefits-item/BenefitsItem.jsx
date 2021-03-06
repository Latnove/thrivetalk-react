import React from 'react'
import styled from 'styled-components'

const Item = styled.div`
  width: 33.333%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-dark-blue);
  @media (max-width: 992px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    padding: 0 0 0 20px;
  }
  @media (max-width: 544px) {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    padding: 0 0 0 0;
  }
`
const Content = styled.div`
  max-width: 300px;
  @media (max-width: 544px) {
    max-width: 270px;
  }
  h3 {
    font-size: 28px;
    font-weight: 400;
    line-height: 1.178em;
    letter-spacing: -0.03em;
    padding: 1.965em 0 0 0;
    opacity: 0;
    transform: translate(0, 20px);
    &._active-anim {
      opacity: 1;
      transform: translate(0);
      transition: all 0.5s ease 0.2s;
    }
    @media (max-width: 992px) {
      padding: 1.6em 0 0 0;
    }
    @media (max-width: 768px) {
      padding: 1.3em 0 0 0;
      width: 90%;
    }
    @media (max-width: 544px) {
      font-size: 26px;
      text-align: center;
      margin: 0 auto;
      padding: 1.4em 0 0 0;
    }
    @media (max-width: 320px) {
      font-size: 22px;
      width: 94%;
      margin: 0 auto;
      padding: 1.4em 0 0 0;
    }
  }
  p {
    font-size: 16px;
    line-height: 1.5625em;
    letter-spacing: -0.03em;
    max-width: 18.75em;
    margin: 1.75em 0 0 0;
    padding: 0 0 2.4em 0;
    opacity: 0;
    transform: translate(0, 20px);
    &._active-anim {
      opacity: 0.5;
      transform: translate(0);
      transition: all 0.5s ease 0.4s;
    }
    @media (max-width: 992px) {
      margin: 1.4em 0 0 0;
      padding: 0 0 1.5em 0;
    }
    @media (max-width: 768px) {
      width: 90%;
      margin: 1.3em 0 0 0;
      padding: 0 0 1em 0;
    }
    @media (max-width: 544px) {
      max-width: 250px;
      text-align: center;
      margin: 0.9em auto 0;
      padding: 0 0 0.3em 0;
    }
    @media (max-width: 320px) {
      font-size: 15px;
      width: 85%;
      margin: 0.7em auto 0;
      padding: 0 0 0 0;
    }
  }
`

export default function BenefitsItem({ className, title, text }) {
  return (
    <Item>
      <Content>
        <h3 className={className}>{title}</h3>
        <p className={className}>{text}</p>
      </Content>
    </Item>
  )
}
