import React, { useRef } from 'react'
import styled from 'styled-components'
import { UserDataModal, Background } from '../../components/'
import CTAFirstPart from './cta-first-part/CTAFirstPart'
import CTASecondPart from './cta-second-part/CTASecondPart'

const Body = styled.div`
  padding: 40px 0 0 0;
  @media (max-width: 1200px) {
    padding: 30px 0 0 0;
  }
  @media (max-width: 768px) {
    padding: 27px 0 0 0;
  }
  @media (max-width: 544px) {
    padding: 30px 0 0 0;
  }
  @media (max-width: 544px) {
    padding: 24px 0 0 0;
  }
`

export default function СTA() {
  const modalBgRef = useRef(null)
  const modalRef = useRef(null)

  const handleClick = () => {
    modalBgRef.current.classList.add('_active')
    modalRef.current.classList.add('_active')
  }
  const closeDataModal = event => {
    if (event.target === modalBgRef.current) {
      modalBgRef.current.classList.remove('_active')
      modalRef.current.classList.remove('_active')
    }
  }

  return (
    <section id="CTA">
      <Body>
        <CTAFirstPart onClick={handleClick} blockId="blog" />
        <CTASecondPart onClick={handleClick} blockId="contact-us" />
      </Body>
      <Background
        ref={modalBgRef}
        onClick={event => closeDataModal(event)}
        initialOpacity="0"
        finiteOpacity="1"
        color="rgb(0, 0, 0, 0.5)"
      >
        <UserDataModal ref={modalRef} background={modalBgRef} />
      </Background>
    </section>
  )
}
