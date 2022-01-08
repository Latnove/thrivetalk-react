import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import randomColor from 'randomcolor'
import debounce from '../../components/utilities/debounce'
import { cocktail_cup } from '../../assets/images/images.js'

const Item = styled.div`
  height: ${props => props.height + 'px'};
  background-color: ${props => props.backgroundColor};
  user-select: none;
  position: relative;

  &._active {
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
    font-weight: 700;
    line-height: 1.12em;
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
  itemColor = null,
  titleText,
}) {
  const [itemHeight, setItemHeight] = useState(null)

  const itemRef = useRef(null)
  const itemStyleRef = useRef(null)
  const colorRef = useRef(itemColor)
  const valueTopRef = useRef(null) // * For <Line>

  useEffect(() => {
    const handleResize = () => {
      setHeight()
      if (itemRef.current.classList.contains('_active')) {
        itemRef.current.classList.remove('_active')
      }
    }
    const handlePointerOver = () => {
      itemRef.current.classList.add('_active')
    }
    const handlePointerOut = () => {
      itemRef.current.classList.remove('_active')
    }

    window.addEventListener('resize', debounce(handleResize, 400))
    itemRef.current.addEventListener('pointerover', handlePointerOver)
    itemRef.current.addEventListener('pointerout', handlePointerOut)

    return () => {
      window.removeEventListener('resize', handleResize)
      itemRef.current.removeEventListener('pointerover', handlePointerOver)
      itemRef.current.removeEventListener('pointerout', handlePointerOut)
    }
  }, [])

  useEffect(() => {
    itemStyleRef.current = getComputedStyle(itemRef.current)
    if (colorRef.current === null) {
      colorRef.current = randomColor({
        luminosity: 'bright',
        format: 'hex',
      })
    }

    setHeight()
  }, [itemRef])

  function getItemWidth(itemWidth) {
    // Длина бывает десятичной, в следствии чего высота у элементов может отличаться на 1px
    const itemsInRow = Math.floor(
      window.innerWidth / parseInt(itemStyleRef.current.width, 10)
    )
    itemWidth = Math.floor(window.innerWidth / itemsInRow)
    return itemWidth
  }

  function setHeight(sideOfSquare, itemMaxHeight) {
    sideOfSquare = getItemWidth()
    itemMaxHeight = parseInt(itemStyleRef.current.maxHeight, 10)

    if (sideOfSquare < itemMaxHeight) {
      valueTopRef.current = 0.2 * sideOfSquare
    } else {
      valueTopRef.current = 0.2 * itemMaxHeight
    }

    setItemHeight(sideOfSquare)
  }

  return (
    <Item
      ref={itemRef}
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
