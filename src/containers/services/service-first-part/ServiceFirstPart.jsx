import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ServiceItem } from '../../../components/'

const Inner = styled.div`
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & > div {
    max-height: 440px;
  }
  @media (max-width: 1200px) {
    margin-top: 20px;
    & > div {
      max-height: 300px;
    }
  }
  @media (max-width: 544px) {
    margin-top: 16px;
    & > div {
      max-height: 275px;
    }
  }
  @media (max-width: 440px) {
    margin-top: 18px;
    & > div {
      max-height: 325px;
    }
  }
  @media (max-width: 320px) {
    margin-top: 16px;
    & > div {
      max-height: 260px;
    }
  }
`

export default function ServiceFirstPart() {
  const [valueWidth, setValueWidth] = useState(null)

  useEffect(() => {
    isSaveItemWidth()

    window.addEventListener('resize', () => {
      isSaveItemWidth()
    })
  }, [])

  function isSaveItemWidth() {
    if (window.matchMedia('(min-width: 993px)').matches) {
      setValueWidth('25%')
    } else if (window.matchMedia('(max-width: 440px)').matches) {
      setValueWidth('100%')
    } else if (window.matchMedia('(max-width: 992px)').matches) {
      setValueWidth('50%')
    }
  }
  return (
    <Inner>
      <ServiceItem
        itemWidth={valueWidth}
        itemColor="#FFE2DE"
        titleText="Weight Lifting"
      />
      <ServiceItem
        itemWidth={valueWidth}
        itemColor="#C4E769"
        titleText="Running & Spinning"
      />
      {/* <ServiceItem
        itemWidth={valueWidth}
        itemColor="#62D0DF"
        titleText="Pumping Iron"
      />
      <ServiceItem
        itemWidth={valueWidth}
        itemColor="#0052C1"
        titleText="Swimming"
      /> */}
    </Inner>
  )
}
