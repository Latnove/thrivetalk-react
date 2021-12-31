import React from 'react'
import styled from 'styled-components'
import { Container, MainText } from '../../components'
import { stand_girl } from '../../assets/images/images.js'

const Block = styled.section`
  @media (max-width: 992px) {
    padding-bottom: calc(140px + 30px);
  }
  @media (max-width: 768px) {
    padding-bottom: calc(140px + 40px);
  }
  @media (max-width: 544px) {
    padding: 0 0 0 0;
  }
`
const Inner = styled.div`
  width: 100%;
  display: flex;
  background-color: #62d0df;
  position: relative;

  @media (max-width: 320px) {
    border-radius: 0 0 15px 15px;
  }
`
const Title = styled.h2`
  font-family: Larsseit;
  font-weight: 700;
  font-size: 36px;
  line-height: 0.762em;
  color: #fff;
  max-width: 10em;
  padding: 4.17em 0 0 0;

  @media (max-width: 1200px) {
    font-size: 30px;
    padding-top: 4em;
  }
  @media (max-width: 992px) {
    font-size: 28px;
    padding-top: 2.5em;
  }
  @media (max-width: 768px) {
    max-width: initial;
    text-align: center;
    padding: 2.8em 0 0 0;
  }
  @media (max-width: 544px) {
    font-size: 24px;
    padding: 2.2em 0 0 0;
  }
  @media (max-width: 320px) {
    font-size: 20px;
    padding: 2em 0 0 0;
  }
`
const Text = styled(MainText)`
  font-weight: 500;
  line-height: 1.457em;
  text-align: left;
  max-width: 23.125em;
  margin: 3.125em 0 0 0;
  padding: 0 0 3.8333em 0;
  & span {
    padding: 0 0 3.8333em 0;
    font-weight: 300;
    font-size: 20px;
    line-height: 1.465em;
  }

  @media (max-width: 1200px) {
    margin: 2.8em 0 0 0;
    padding: 0 0 3.5em 0;
    & span {
      font-size: 18px;
    }
  }
  @media (max-width: 992px) {
    margin: 1.7em 0 0 0;
    padding: 0 0 calc(400px - 110px) 0; /* 110px - у изображения (bottom) */
    float: right;
  }
  @media (max-width: 768px) {
    width: 90%;
    max-width: 23em;
    text-align: center;
    margin: 1.4em auto 0;
    padding: 0 0 calc(400px - 115px) 0;
    float: none;
  }
  @media (max-width: 544px) {
    width: 90%;
    margin: 1.1em auto 0;
    padding: 0 0 calc(300px + 50px) 0;
    & span {
      font-size: 16px;
    }
  }
  @media (max-width: 320px) {
    margin: 0.9em auto 0;
    padding: 0 0 calc(225px + 40px) 0;
    & span {
      font-size: 15px;
    }
  }
`
const Image = styled.div`
  width: 40%;
  min-width: 525px;
  max-width: 910px;
  height: 100%;
  position: absolute;
  right: 0;
  & img {
    object-fit: cover;
    height: inherit;
    width: auto;
    position: relative;
  }
  @media (min-width: 1921px) {
    width: 34.5%;
  }
  @media (max-width: 1200px) {
    min-width: 545px;
    & img {
      left: 100px;
    }
  }
  @media (max-width: 992px) {
    min-width: 0;
    width: auto;
    height: 400px;
    left: 45px;
    bottom: -140px;
    & img {
      margin-left: 0;
      border-radius: 10px;
      left: 0;
    }
  }
  @media (max-width: 768px) {
    max-width: 600px;
    margin: 0 auto;
    padding: 0 20px 0 20px;
    left: 0;
  }
  @media (max-width: 544px) {
    width: 100%;
    height: 300px;
    padding: 0 12.5px 0 12.5px;
    left: 0;
    bottom: calc(13.5px * 2); /* + (2 px / 2) от border-top */
    & > span,
    & > img {
      margin: 0 auto;
    }
    & img {
      margin-top: 12.5px;
      border-radius: 15px;
    }
  }
  @media (max-width: 320px) {
    height: 225px;
    padding: 0 10px 0 10px;
    bottom: calc(11px * 2); /* + (2 px / 2) от border-top */
    & img {
      margin-top: 10px;
    }
  }
`
const Line = styled.span`
  @media (max-width: 544px) {
    max-width: 450px;
    display: block;
    border-top: #005aa3 solid 2px;
  }
`

export default function Discussion() {
  return (
    <Block id="discussion">
      <Inner>
        <Container>
          <Title>Why Thrive?</Title>

          <Text>
            Want to improve your well-being from the comfort of your own
            couch? Are you having trouble finding the right therapist?{' '}
            <span>
              Here at ThriveTalk, our licensed therapists provide the same
              quality care you would get in office from anywhere you can
              access your laptop or mobile phone. Become your best self
              with ThriveTalk. Start therapy now with a licensed therapist!
            </span>
          </Text>
        </Container>

        <Image>
          <Line></Line>

          <img src={stand_girl} alt="There is a girl" />
        </Image>
      </Inner>
    </Block>
  )
}
