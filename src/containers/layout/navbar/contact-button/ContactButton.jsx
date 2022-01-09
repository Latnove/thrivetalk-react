import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import scrollTo from '../../../../components/utilities/scrollTo'

const Contact = styled.div`
  position: relative;
  z-index: 3;
  right: 0;
  @media (min-width: 768px) {
    display: ${props => (props.existence ? props.existence : 'flex')};
  }
  @media (max-width: 768px) {
    display: ${props =>
      props.existence ? (props.existence = 'block') : 'none'};
    flex: 0 1 100%;
    position: relative;
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
    margin: auto;
    outline: 1px solid rgb(11, 0, 158);
    position: absolute;
    left: 50%;
    bottom: 5px;
    transform: translate(-50%, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      line-height: 100%;
      text-align: center;
      margin: auto;
    }
  }
  @media (max-width: 544px) {
    font-size: 12px;
  }
`

export default React.memo(function ContactButton({
  activity = null,
  blockId,
}) {
  return (
    <Contact existence={activity}>
      <ContactLink onClick={elementId => scrollTo(blockId)}>
        <span>Contact us</span>
      </ContactLink>
    </Contact>
  )
})
