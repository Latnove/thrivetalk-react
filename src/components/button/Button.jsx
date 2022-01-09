import React from 'react'
import styled from 'styled-components'

const ButtonStyle = styled.button`
  font-family: Larsseit;
  font-size: 16px;
  letter-spacing: 0.105em;
  line-height: 1.4375em;
  font-style: 700;

  color: ${props => props.textColor};
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.5s;

  outline: none; /* Для синий ободки */
  border: 0;
  background: transparent;

  @media (max-width: 544px) {
    font-size: 15px;
    width: 15.35em;
  }

  @media (max-width: 320px) {
    font-size: 14px;
  }
`

export default React.memo(function Button({
  text,
  textColor = '#fab63e',
  onClick,
}) {
  return (
    <ButtonStyle onClick={onClick} type="button" textColor={textColor}>
      <span>{text}</span>
    </ButtonStyle>
  )
})
