import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

const Item = styled.div`
  background-color: #ddd;
  width: ${props => (props.width ? props.width : 0)};
  height: ${props => (props.height ? props.height : '360px')};
  max-height: 440px;
`
const Content = styled.div`
  /*  */
`
const Line = styled.div`
  /*  */
`
const Text = styled.ul`
  font-size: 32px;
  color: #fff;
  list-style: none;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  & li {
    font-family: Larsseit;
    line-height: 34px;
    letter-spacing: -0.006em;
  }
  & li::before {
    content: '●';
    font-size: 0.55em;
    color: #e9b730;
    margin: 0 0.85227em 0 0;
    position: relative;
    top: -0.568em;
  }
`

export default React.memo(function ServiceItem({ width }) {
  const [itemHeight, setItemHeight] = useState(null)
  const itemRef = useRef(null)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setHeight()
    })
  }, [])

  useEffect(() => {
    setHeight()
  }, [itemRef])

  function setHeight(elementWidth) {
    elementWidth = itemRef.current.offsetWidth
    setItemHeight(`${elementWidth}px`)
  }

  return (
    <Item width={width} ref={itemRef} height={itemHeight}>
      <Content>
        <Line></Line>
        <Text>
          <li>Weight Lifting</li>
        </Text>
      </Content>
    </Item>
  )
})