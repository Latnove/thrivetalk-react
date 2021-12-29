import React from 'react'
import styled from 'styled-components'
import { Container, MainText, MainTitle } from '../../components'

const Block = styled.section`
  /*  */
`
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
  color: #22356f;
  max-width: 24.6667em;
  margin: 0 auto;

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
  return (
    <section id="about">
      <Inner>
        <Title>About Us</Title>

        <Text>
          We want to help you thrive! Whether you are just looking for
          someone to talk to, or are struggling with a mental wellness
          issue were here to help. Our highly talented therapists can help
          you with a range of issues including relationships, sex, PTSD,
          depression, social anxiety, or even just caring for yourself
          more.
        </Text>
      </Inner>
    </section>
  )
}
