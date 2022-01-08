import React from 'react'
import styled from 'styled-components'
import { MainTitle, CTAText, Button } from '../../../components'
import { funny_man } from '../../../assets/images/images.js'

const Inner = styled.div`
  background-color: var(--color-dark-blue);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  @media (max-width: 992px) {
    align-items: initial;
    flex-direction: column-reverse;
    justify-content: initial;
  }
`
const Content = styled.div`
  padding: 103px 11vw 42px 35px;
  @media (max-width: 1440px) {
    padding: 80px 60px 37px 35px;
  }
  @media (max-width: 1200px) {
    padding: 70px 40px 32px 22.5px;
  }
  @media (max-width: 992px) {
    padding: 50px 50px 35px 50px;
    position: relative;
    Button {
      float: right;
    }
  }
  @media (max-width: 768px) {
    max-width: 680px;
    padding: 40px 35px 30px 35px;
    transform: translate(-50%, 0);
    position: relative;
    left: 50%;
  }
  @media (max-width: 544px) {
    padding: 35px 0 25px 0;
    Button {
      float: initial;
      transform: translate(-50%, 0);
      position: relative;
      left: 50%;
    }
  }
  @media (max-width: 320px) {
    padding: 25px 0 17px 0;
  }
`
const Title = styled(MainTitle)`
  color: #fff;
  margin: 0 0 14.375em 0;
  @media (max-width: 1440px) {
    margin: 0 0 13em 0;
  }
  @media (max-width: 1200px) {
    margin: 0 0 10em 0;
  }
  @media (max-width: 992px) {
    margin: 0 0 1.4em 0;
  }
  @media (max-width: 768px) {
    margin: 0 0 1.2em 0;
  }
  @media (max-width: 544px) {
    text-align: center;
    margin: 0 0 1em 0;
  }
  @media (max-width: 320px) {
    margin: 0 0 1.1em 0;
  }
`
const SubTitle = styled.h3`
  font-size: 64px;
  line-height: 1.46875em;
  letter-spacing: -0.01em;
  margin: 0 0 1.17875em 0;
  @media (max-width: 1440px) {
    font-size: 58px;
  }
  @media (max-width: 1200px) {
    font-size: 50px;
    margin: 0 0 1em 0;
  }
  @media (max-width: 992px) {
    text-align: center;
    margin: 0 auto 0.35em;
  }
  @media (max-width: 768px) {
    margin: 0 auto 0.3em;
    font-size: 40px;
  }
  @media (max-width: 544px) {
    margin: 0 auto 0.45em;
    font-size: 32px;
  }
  @media (max-width: 320px) {
    margin: 0 auto 0.3em;
    font-size: 27px;
  }
`
const Text = styled.p`
  font-weight: 400;
  max-width: 16.111em;
  margin: 0 0 2.08em 0;
  @media (max-width: 1440px) {
    margin: 0 0 1.9em 0;
  }
  @media (max-width: 1200px) {
    width: 90%;
  }
  @media (max-width: 992px) {
    margin: 0 auto 1.025em;
    text-align: center;
    max-width: 14em;
  }
  @media (max-width: 768px) {
    margin: 0 auto 0.85em;
    width: 92%;
    max-width: 12em;
  }
  @media (max-width: 544px) {
    margin: 0 auto 1.1em;
    max-width: 14em;
    width: 84%;
  }
  @media (max-width: 440px) {
    max-width: 12em;
  }
  @media (max-width: 320px) {
    margin: 0 auto 0.95em;
    max-width: 11.4em;
  }
`
const Image = styled.div`
  @media (min-width: 1441px) {
    flex: 0 1 650px;
  }
  @media (max-width: 1440px) {
    flex: 0 1 600px;
  }
  @media (max-width: 992px) {
    flex: initial;
    align-self: flex-end;
    width: 100%;
    max-width: 720px;
    height: 450px;
    overflow: hidden;
    img {
      margin: -30% 0 0 0;
    }
  }
  @media (max-width: 768px) {
    max-width: 620px;
    height: 375px;
  }
  @media (max-width: 544px) {
    width: 100%;
    max-width: 420px;
    height: 280px;
  }
  @media (max-width: 320px) {
    max-width: initial;
    height: 250px;
  }
`

export default function CTASecondPart({ onClick, blockId }) {
  return (
    <Inner id={blockId}>
      <Content>
        <Title>CONTACT US</Title>
        <SubTitle>Ready. Set. Smile</SubTitle>
        <CTAText color="#fff">
          <Text>
            Take the free online assessment to see if you are a candidate
            and get started on your journey.
          </Text>
        </CTAText>
        <Button
          onClick={onClick}
          text="GET HELP NOW"
          textColor="#62D0DF"
        />
      </Content>

      <Image>
        <img src={funny_man} alt="Here is a cheerful man" />
      </Image>
    </Inner>
  )
}
