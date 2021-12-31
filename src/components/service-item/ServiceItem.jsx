import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import randomColor from 'randomcolor'
import { cocktail_cup } from '../../assets/images/images.js'

const Item = styled.div`
  width: ${props => props.width};
  height: ${props => props.height + 'px'};
  background-color: ${props => props.backgroundColor};
  user-select: none;
  position: relative;

  &._active:hover {
    background-color: initial;
    transition: all 0.6s;
    ::before {
      content: '';
      width: 100%;
      height: 100%;
      max-height: 100%;
      background-image: url(${cocktail_cup});
      background-size: cover;
      background-position-x: 40%;
      overflow: hidden;
      position: absolute;
      z-index: -1;
    }
  }
`
const Content = styled.div`
  width: 68%;
  margin: 0 auto;
`
const Line = styled.div`
  margin-top: ${props => props.top + 'px'};
  width: 100%;
  height: 1px;
  background-color: #fff;
`
const Text = styled.div`
  color: #fff;
  margin: 23px 0 0 0;
  display: flex;
  justify-content: left;
  position: relative;

  & div:nth-of-type(1) {
    width: 10px;
    height: 10px;
    background-color: #e9b730;
    border-radius: 100%;
    position: absolute;
    top: 10px;
  }
  & p {
    font-size: 32px;
    font-family: Larsseit;
    line-height: 1.1764em;
    letter-spacing: -0.006em;
    max-width: 6.25em;
    margin: 0 0 0 25px;
    @media (max-width: 1200px) {
      font-size: 28px;
    }
    @media (max-width: 992px) {
      font-size: 29px;
    }
    @media (max-width: 544px) {
      font-size: 24px;
    }
    @media (max-width: 440px) {
      font-size: 28px;
    }
    @media (max-width: 320px) {
      font-size: 26px;
    }
  }
`

export default React.memo(function ServiceItem({
  itemWidth = null,
  itemColor = null,
  titleText,
}) {
  const [itemHeight, setItemHeight] = useState(null)

  const itemRef = useRef(null)
  const colorRef = useRef(itemColor)
  const valueTopRef = useRef(null) // * For <Line>

  useEffect(() => {
    window.addEventListener('resize', () => {
      setHeight()
      if (itemRef.current.classList.contains('_active')) {
        itemRef.current.classList.remove('_active')
      }
    })
    itemRef.current.addEventListener('mouseover', () => {
      itemRef.current.classList.add('_active')
    })
    itemRef.current.addEventListener('mouseout', () => {
      itemRef.current.classList.remove('_active')
    })
  }, [])

  useEffect(() => {
    if (colorRef.current === null) {
      colorRef.current = randomColor({
        luminosity: 'bright',
        format: 'hex',
      })
    }

    if (itemWidth !== null) {
      setHeight()
    }
  }, [itemWidth])

  function setHeight(sideOfSquare) {
    sideOfSquare = itemRef.current.offsetWidth // Так как у нас Item КВАДРАТНЫЙ

    if (sideOfSquare < sideOfSquare * 1.22) {
      valueTopRef.current = 0.2 * sideOfSquare
    } else {
      valueTopRef.current = 0.2 * sideOfSquare * 1.22
    }

    setItemHeight(sideOfSquare)
  }

  return (
    <Item
      ref={itemRef}
      width={itemWidth}
      height={itemHeight}
      backgroundColor={colorRef.current}
    >
      <Content>
        <Line top={valueTopRef.current}></Line>
        <Text>
          <div></div>
          <p>{titleText}</p>
        </Text>
      </Content>
    </Item>
  )
})
