import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { MainTitle } from '../../components/index.js'
import { ServiceFirstPart, ServiceSecondPart } from './'

const Inner = styled.div`
  padding: 70px 0 0 0;
  @media (max-width: 768px) {
    padding: 50px 0 0 0;
  }
  @media (max-width: 544px) {
    padding: 40px 0 0 0;
  }
  @media (max-width: 320px) {
    padding: 30px 0 0 0;
  }
`
const Row = styled.div`
  text-align: center;
  margin: 0 auto;
  & ${MainTitle} {
    opacity: 0.5;
    cursor: pointer;
    display: inline;
    :hover {
      opacity: 0.7;
      transition: opacity 0.2s;
    }
  }
`

export default function Services() {
  const navRef = useRef(null)
  const servicesRef = useRef(null)

  useEffect(() => {
    navRef.current = document.querySelector('header')
  }, [])

  function clickTitle() {
    const scrollValue =
      servicesRef.current.getBoundingClientRect().top -
      navRef.current.offsetHeight

    window.scrollBy({
      top: scrollValue,
      behavior: 'smooth',
    })
  }

  return (
    <section ref={servicesRef} id="services">
      <Inner>
        <Row>
          <MainTitle onClick={clickTitle}>WE CAN HELP YOU WITH</MainTitle>
        </Row>
        <ServiceFirstPart />
        {/* <ServiceSecondPart /> */}
      </Inner>
    </section>
  )
}
