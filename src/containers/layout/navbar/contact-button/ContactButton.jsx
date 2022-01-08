import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { debounce } from '../../../../components/'

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
    transition: all 0.7s;
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
  onClick,
  value,
}) {
  const [topHeight, setTopHeight] = useState(null)
  const windowHeight = useRef(window.innerHeight)

  useEffect(() => {
    function setContactHeight() {
      if (list !== null) {
        const listHeight =
          list.current.offsetHeight + value.nav.current.offsetHeight
        setTopHeight(
          ((windowHeight.current - listHeight) / windowHeight.current) *
            100
        )
      }
    }
    const handleResize = () => {
      windowHeight.current = window.innerHeight
      setContactHeight()
    }

    window.addEventListener('resize', debounce(handleResize, 500))
    setContactHeight()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [list, value])

  return (
    <Contact height={topHeight} existence={activity}>
      <ContactLink onClick={onClick}>Contact us</ContactLink>
    </Contact>
  )
})
