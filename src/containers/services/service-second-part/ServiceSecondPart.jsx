import React from 'react'
import styled from 'styled-components'
import { ServiceItem } from '../../../components/index.js'

const Inner = styled.div`
  margin: 120px 0 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > div {
    width: 33.33%;
    max-height: 585px;
  }
  @media (max-width: 1200px) {
    margin: 90px 0 0 0;
    & > div {
      max-height: 320px;
    }
  }
  @media (max-width: 992px) {
    margin: 80px 0 0 0;
    & > div {
      width: 50%;
      max-height: 390px;
    }
  }
  @media (max-width: 768px) {
    margin: 75px 0 0 0;
  }
  @media (max-width: 544px) {
    margin: 60px 0 0 0;
    & > div {
      width: 80%;
      max-height: 300px;
    }
    & > div:first-child,
    & > div:first-child::before {
      border-radius: 50px 50px 0 0;
    }
    & > div:last-child,
    & > div:last-child::before {
      border-radius: 0 0 40px 40px;
    }
  }
  @media (max-width: 440px) {
    margin: 60px 0 0 0;
    & > div {
      max-height: 330px;
      width: 100%;
    }
    & > div:first-child,
    & > div:first-child::before {
      border-radius: 15% 15% 0 0;
    }
    & > div:last-child,
    & > div:last-child::before {
      border-radius: 0 0 10% 10%;
    }
  }
  @media (max-width: 320px) {
    margin: 45px 0 0 0;
    & > div {
      max-height: 320px;
    }
  }
`

export default function ServiceSecondPart() {
  return (
    <Inner>
      <ServiceItem titleText="Physical Health" itemColor="#22356F" />
      <ServiceItem titleText="Mental Health" itemColor="#0052C1" />
      <ServiceItem titleText="Nutrition" itemColor="#76E58B" />
      <ServiceItem titleText="Gymnastics" itemColor="#62D0DF" />
      <ServiceItem titleText="Crossfit" itemColor="#DEE1FF" />
      <ServiceItem titleText="Aerobics" itemColor="#8F00FF" />
    </Inner>
  )
}
