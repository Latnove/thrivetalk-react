import React from 'react'
import styled from 'styled-components'
import { ServiceItem } from '../../../components/'

const Inner = styled.div`
  margin: 24px 0 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > div {
    width: 25%;
    max-height: 440px;
  }
  @media (max-width: 1200px) {
    margin: 20px 0 0 0;
    & > div {
      max-height: 300px;
    }
  }
  @media (max-width: 992px) {
    & > div {
      width: 50%;
    }
  }
  @media (max-width: 544px) {
    margin: 16px 0 0 0;
    & > div {
      max-height: 230px;
    }
  }
  @media (max-width: 440px) {
    margin: 18px 0 0 0;
    & > div {
      width: 100%;
      max-height: 280px;
    }
  }
  @media (max-width: 320px) {
    margin: 16px 0 0 0;
    & > div {
      max-height: 240px;
    }
  }
`

export default function ServiceFirstPart() {
  return (
    <Inner>
      <ServiceItem itemColor="#FFE2DE" titleText="Weight Lifting" />
      <ServiceItem itemColor="#C4E769" titleText="Running & Spinning" />
      <ServiceItem itemColor="#62D0DF" titleText="Pumping Iron" />
      <ServiceItem itemColor="#0052C1" titleText="Swimming" />
    </Inner>
  )
}
