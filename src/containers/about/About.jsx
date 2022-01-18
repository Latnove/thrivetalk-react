import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Container, MainText, MainTitle } from '../../components'
import scrollAnimation from '../../components/utilities/scrollAnimation.js'

const Inner = styled(Container)`
  padding: 156px 0 0 0;
  position: relative;

  @media (max-width: 1200px) {
    padding: 124px 0 0 0;
  }
  @media (max-width: 992px) {
    padding: 80px 0 0 0;
  }
  @media (max-width: 768px) {
    padding: 50px 0 0 0;
  }
  @media (max-width: 544px) {
    padding: 65px 0 0 0;
  }
  @media (max-width: 320px) {
    padding: 40px 0 0 0;
  }
`
const Title = styled(MainTitle)`
  position: absolute;
  left: 0px;
  opacity: 0;
  &._active-anim {
    opacity: 1;
    transition: opacity 1.6s ease 0.3s;
  }

  @media (max-width: 992px) {
    left: 35px;
  }
  @media (max-width: 768px) {
    position: relative;
    left: 45px;
  }
  @media (max-width: 544px) {
    left: 11.5%;
  }
`
const Text = styled(MainText)`
  font-weight: 500;
  line-height: 1.40625em;
  letter-spacing: 0.005em;
  color: var(--color-dark-blue);
  max-width: 24.6667em;
  margin: 0 auto;
  opacity: 0;
  &._active-anim {
    opacity: 1;
    transition: opacity 1.6s ease 0.3s;
  }

  @media (max-width: 992px) {
    padding: 55px 0 0 0;
  }
  @media (max-width: 768px) {
    width: 76%;
    margin: 32.5px auto 0;
    padding: 0 0 0 0;
  }
  @media (max-width: 544px) {
    width: 90%;
    max-width: 21em;
    margin: 20px auto 0;
  }
  @media (max-width: 320px) {
    /* Немного неправильно с размером - исключение */
    font-size: 17px;
    width: 91%;
    margin: 15px auto 0;
  }
`
export default function About() {
  useEffect(() => {
    const animItems = document.querySelectorAll('.about-anim')
    scrollAnimation(animItems)
  }, [])
  return (
    <section id="about">
      <Inner>
        <Title className="about-anim">About Us</Title>

        <Text className="about-anim">
          We want to help you thrive! Whether you are just looking for
          someone to talk to, or are struggling with a mental wellness
          issue were here to help. Our highly talented therapists can help
          you with a range of issues including relationships, PTSD,
          depression, social anxiety, or even just caring for yourself
          more.
        </Text>
      </Inner>
    </section>
  )
}
