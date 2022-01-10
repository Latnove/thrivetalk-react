import React from 'react'
import styled from 'styled-components'
import { autumn_goodman } from '../../../../assets/images/images.js'
import FooterInfoItem from './FooterInfoItem.jsx'

const Inner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const Image = styled.div`
  flex: 0 1 620px;
  @media (max-width: 1440px) {
    max-width: 450px;
  }
  @media (max-width: 1200px) {
    max-width: 370px;
  }
  @media (max-width: 992px) {
    width: 220px;
    height: 100%;
    flex: initial;
    position: relative;
    img {
      width: 180px;
      height: 180px;
      border-radius: 100%;
      object-fit: cover;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 260px;
  }
`
const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin: 70px 0 0 100px;
  @media (max-width: 1440px) {
    margin: 60px 0 0 55px;
  }
  @media (max-width: 1200px) {
    margin: 30px 0 0 6vw;
  }
  @media (max-width: 992px) {
    flex: 0 1 calc(100% - 220px);
    margin: 50px 5vw 30px 10px;
  }
  @media (max-width: 768px) {
    width: 100%;
    max-width: 600px;
    justify-content: space-around;
    flex: initial;
    margin: 0 0 20px 0;
  }
  @media (max-width: 544px) {
    flex-wrap: wrap;
    max-width: 430px;
    gap: 30px;
    margin: 0 0 15px 0;
  }
`
const Line = styled.span`
  margin: 0 4.5vw 0 0;
  border: 1px solid rgba(0, 0, 0, 0.025);
  @media (max-width: 1200px) {
    margin: 0 2vw 0 2vw;
  }
  @media (max-width: 544px) {
    display: none;
  }
`
const Text = styled.div`
  font-size: 14px;
  line-height: 1.642em;
  letter-spacing: -0.006em;
  color: var(--color-dark-blue);
  & > p {
    opacity: 0.5;
  }
  &.footer-info__text_one {
    max-width: 14.28em;
  }
  &.footer-info__text_two {
    p:nth-of-type(1) {
      max-width: 10.357em;
      margin: 0 0 1.785em 0;
      @media (max-width: 1440px) {
        margin: 0 0 1.55em 0;
      }
      @media (max-width: 1200px) {
        margin: 0 0 1.2em 0;
      }
      @media (max-width: 992px) {
        margin: 0 0 0.9em 0;
      }
      @media (max-width: 768px) {
        margin: 0 auto 0.9em;
      }
      @media (max-width: 544px) {
        margin: 0 auto 0.8em;
      }
    }
    p:nth-of-type(3) {
      opacity: 1;
    }
    p > span {
      color: #213ffd;
    }
  }
  &.footer-info__text_three {
    max-width: 8.928em;
  }
  @media (max-width: 768px) {
    display: block;
    text-align: center;
    margin: 0 auto;
    &.footer-info__text_one p {
      width: 94%;
      margin: 0 auto;
    }
    &.footer-info__text_two p:nth-of-type(1) {
      width: 10em;
      max-width: initial;
    }
  }
`
export default function FooterInfo() {
  return (
    <Inner>
      <Image>
        <img src={autumn_goodman} alt="This is a autumn good man" />
      </Image>

      <Content>
        <FooterInfoItem text="SOME INFO">
          <Text className="footer-info__text_one">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Aenean commodo ligula.
            </p>
          </Text>
        </FooterInfoItem>
        <Line />

        <FooterInfoItem text="ENFOLD HEALTH">
          <Text className="footer-info__text_two">
            <p>Main Street 1, Olcott Buffalo, United States</p>
            <p>+555 283 784 333</p>
            <p>
              <span>office@enfold-health.com</span>
            </p>
          </Text>
        </FooterInfoItem>
        <Line />

        <FooterInfoItem text="OFFICE HOURS">
          <Text className="footer-info__text_three">
            <p>Mo-Fr: 8:00-19:00</p>
            <p>Sa: 8:00-14:00</p>
            <p>Su: closed</p>
          </Text>
        </FooterInfoItem>
      </Content>
    </Inner>
  )
}
