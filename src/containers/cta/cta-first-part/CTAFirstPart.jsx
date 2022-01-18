import React, { useEffect } from 'react'
import styled from 'styled-components'
import { MainTitle, Button, CTAText } from '../../../components/'
import { sales_navigator } from '../../../assets/images/images.js'
import scrollAnimation from '../../../components/utilities/scrollAnimation.js'

const Inner = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 992px) {
    align-items: initial;
    flex-direction: column;
  }
`
const Image = styled.div`
  opacity: 0;
  &._active-anim {
    opacity: 1;
    transition: opacity 1.2s ease 0.3s;
  }
  @media (min-width: 1441px) {
    flex: 0 1 580px;
  }
  @media (max-width: 1440px) {
    flex: 0 1 530px;
  }
  @media (max-width: 992px) {
    flex: initial;
    width: 100%;
    max-width: 720px;
    height: 450px;
    overflow: hidden;
    &._active-anim {
      transition: opacity 1.5s ease 0.2s;
    }
    img {
      max-height: initial;
      margin: -35% 0 0 0;
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
const Content = styled.div`
  padding: 103px 0 42px 105px;
  & Button {
    opacity: 0;
    transform: translate(0, 25px);
    &._active-anim {
      opacity: 1;
      transform: translate(0);
      transition: all 0.4s ease 0.25s;
    }
  }
  @media (max-width: 1440px) {
    padding: 80px 0 37px 80px;
  }
  @media (max-width: 1200px) {
    padding: 70px 0 32px 70px;
  }
  @media (max-width: 992px) {
    padding: 50px 50px 35px 50px;
    Button {
      float: right;
      margin: 0;
      &._active-anim {
        transition: all 0.4s ease 0.35s;
      }
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
      transform: translate(-50%, 15px);
      position: relative;
      left: 50%;
      &._active-anim {
        transform: translate(-50%, 0);
      }
    }
  }
  @media (max-width: 320px) {
    padding: 25px 0 17px 0;
  }
`
const Title = styled(MainTitle)`
  margin: 0 0 225px 0;
  opacity: 0;
  transform: translate(0, -25px);
  &._active-anim {
    opacity: 1;
    transform: translate(0);
    transition: all 0.4s ease 0.2s;
  }
  @media (max-width: 1440px) {
    margin: 0 0 200px 0;
  }
  @media (max-width: 1200px) {
    margin: 0 0 165px 0;
  }
  @media (max-width: 992px) {
    margin: 0 0 55px 0;
    &._active-anim {
      transition: all 0.4s ease 0.35s;
    }
  }
  @media (max-width: 768px) {
    margin: 0 0 40px 0;
  }
  @media (max-width: 544px) {
    text-align: center;
    margin: 0 auto 20px;
    transform: translate(0, -15px);
  }
  @media (max-width: 320px) {
    margin: 0 auto 15px;
  }
`
const Text = styled.p`
  margin: 0 0 4.22em 0;
  max-width: 19.4em;
  opacity: 0;
  &._active-anim {
    opacity: 1;
    transition: opacity 1.2s ease 0.4s;
  }
  span {
    color: var(--color-blue);
  }
  @media (max-width: 1440px) {
    width: 92%;
    max-width: 18.5em;
  }
  @media (max-width: 1200px) {
    margin: 0 0 3em 0;
  }
  @media (max-width: 992px) {
    margin: 0 auto 1.5em;
  }
  @media (max-width: 768px) {
    text-align: center;
    width: 87%;
    max-width: 16em;
    margin: 0 auto 1.1em;
  }
  @media (max-width: 544px) {
    text-align: center;
    width: 82%;
    margin: 0 auto 0.85em;
  }
  @media (max-width: 320px) {
    width: 80%;
    margin: 0 auto 0.7em;
  }
`

export default function CTAFirstPart({ onClick, blockId }) {
  useEffect(() => {
    const animItems = document.querySelectorAll('.cta-first-anim')
    scrollAnimation(animItems)
  }, [])

  return (
    <Inner id={blockId}>
      <Image className="cta-first-anim _anim-no-hide">
        <img src={sales_navigator} alt="Two people are talking here" />
      </Image>

      <Content>
        <Title className="cta-first-anim">YOU SHOULD ALSO KNOW</Title>
        <CTAText color="#22356F">
          <Text className="cta-first-anim">
            MDD affects more than 16.1 million American adults, or about
            6.7% of the U.S. population age 18 and older in a given year.
            We at <span>ThriveTalk</span> can help you.
          </Text>
        </CTAText>
        <Button
          className="cta-first-anim"
          text="GET HELP NOW"
          textColor="#fab63e"
          onClick={onClick}
        />
      </Content>
    </Inner>
  )
}
