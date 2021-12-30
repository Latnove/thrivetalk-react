import React from 'react'
import styled from 'styled-components'
import { ServiceItem } from '../../../components/'

const Inner = styled.div`
  margin-top: 24px;
`

export default function ServiceFirstPart() {
  return (
    <Inner>
      <ServiceItem width="25%" />
    </Inner>
  )
}
