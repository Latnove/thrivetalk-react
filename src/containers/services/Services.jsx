import React from 'react'
import styled from 'styled-components'
import MainTitle from '../../components/title/MainTitle.jsx'
import { ServiceFirstPart, ServiceSecondPart } from './'

const Inner = styled.div`
  padding: 70px 0 0 0;
`
const Title = styled(MainTitle)`
  opacity: 0.5;
  text-align: center;
  margin: 0 auto;
`

export default function Services() {
  return (
    <div id="services">
      <Inner>
        <Title>WE CAN HELP YOU WITH</Title>
        <ServiceFirstPart />
      </Inner>
    </div>
  )
}
