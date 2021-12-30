import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Contact = styled.div`
  position: relative;
  z-index: 3;
  right: 0;
  @media (min-width: 768px) {
    display: ${props => (props.existence ? props.existence : 'flex')};
  }
  @media (max-width: 768px) {
    display: ${props =>
      props.existence ? (props.existence = 'flex') : 'none'};
    position: relative;
    height: ${props => (props.height ? props.height + 'vh' : '0px')};
    min-height: 90px;
    left: 0;
    top: 0;
  }
`
const ContactLink = styled.button`
  font-family: 'Larsseit';
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  border: none;

  cursor: pointer;
  background-color: var(--color-blue);
  width: 10.714285em;
  height: 3.5714285em;
  border-radius: 3.5714285em;
  &:hover {
    background-color: #296dcc;
  }
  @media (max-width: 768px) {
    margin: 0 auto;
    outline: 1px solid rgb(11, 0, 158);
    position: absolute;
    left: 50%;
    bottom: 5px;
    transform: translate(-50%, 0);
  }
  @media (max-width: 544px) {
    font-size: 12px;
  }
`

export default React.memo(function ContactButton({
  list = null,
  activity = null,
  value,
}) {
  const [topHeight, setTopHeight] = useState(null)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)

  useEffect(() => {
    if (list !== null) {
      const listHeight =
        list.current.offsetHeight + value.nav.current.offsetHeight
      setTopHeight(((windowHeight - listHeight) / windowHeight) * 100)
    }
  }, [windowHeight, list, value])

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowHeight(window.innerHeight)
    })
  }, [])

  return (
    <Contact height={topHeight} existence={activity}>
      <ContactLink data-goto="#">Contact us</ContactLink>
    </Contact>
  )
})
