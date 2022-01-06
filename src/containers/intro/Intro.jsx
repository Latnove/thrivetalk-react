import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { Container, SiteLogo, Button, MainText } from '../../components'
import { interview } from '../../assets/images/images.js'

const Block = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  left: 0;
  top: 0;
  overflow: hidden;
`
const Background = styled.div`
  display: flex;
  position: absolute;
  z-index: -1;
  top: 0;
  width: 100%;
  height: 100%;
`
const BackgroundColor = styled.div`
  @media (min-width: 768px) {
    width: 50%;
    height: inherit;
    ${props => (props.posLeft ? 'left' : 'right')}: 0;
    background-color: ${props =>
      props.posLeft ? 'var(--color-intro)' : 'var(--color-intro-right)'};
  }

  @media (max-width: 768px) {
    display: none;
  }
`
const IntroBody = styled(Container)`
  display: flex;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    background-color: var(--color-intro);
  }
`
const FirstPart = styled.div`
  width: 85%;
  position: relative;
  left: 0;
  top: 0;
  background-color: var(--color-intro);

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 544px) {
    background: none;
  }
`
const Inner = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;

  /* Высота header берем */
  padding-top: 100px;
  padding-bottom: 5.4em;
  width: 30.3125em;
  height: 100%;

  @media (max-width: 1200px) {
    font-size: 15px;
    width: 27em;
  }

  @media (max-width: 992px) {
    padding-top: 80px;
    position: relative;
    left: 0;
    z-index: 2;
  }

  @media (max-width: 768px) {
    padding-top: 60px;
    padding-bottom: 2.5em;
    font-size: 18px;
    margin: 0 auto;
  }

  @media (max-width: 544px) {
    width: 100%;
    padding-bottom: 2.2em;
  }

  @media (max-width: 320px) {
    padding-bottom: 1.8em;
    padding-top: 50px;
  }
`
const Logo = styled(SiteLogo)`
  padding: 5.83em 0 0 0;

  @media (max-width: 992px) {
    padding-top: 4.5em;
  }

  @media (max-width: 768px) {
    padding-top: 3.5em;
    margin: 0 auto;
  }

  @media (max-width: 544px) {
    padding-top: 2.7em;
  }

  @media (max-width: 320px) {
    padding-top: 2.3em;
  }
`
const Title = styled.h1`
  font-family: Larsseit;
  color: var(--color-dark-blue);
  font-weight: 700;
  font-size: 48px;
  letter-spacing: -0.0417em;
  line-height: 1.1133em;
  text-transform: uppercase;
  margin: 0.8em 0 0 0;

  @media (max-width: 1200px) {
    font-size: 40px;
  }

  @media (max-width: 992px) {
    margin: 0.75em 0 0 0;
  }

  @media (max-width: 768px) {
    text-align: center;
  }

  @media (max-width: 544px) {
    margin: 0.65em auto 0;
    font-size: 30px;
    max-width: 11em;
    width: 90%;
  }

  @media (max-width: 320px) {
    font-size: 26px;
    width: 92%;
    margin: 0.55em auto 0;
  }
`
const Text = styled(MainText)`
  line-height: 1.75791em;
  color: var(--color-dark-blue);
  margin: 2.96em 0 0 0;

  @media (max-width: 1200px) {
    margin: 2.2em 0 0 0;
  }

  @media (max-width: 992px) {
    margin: 1.7em 0 0 0;
  }

  @media (max-width: 768px) {
    text-align: center;
    margin: 1.4em auto 0;
    max-width: 470px;
  }

  @media (max-width: 544px) {
    margin: 1em auto 0;
    max-width: 21em;
    width: 90%;
  }

  @media (max-width: 320px) {
    width: 90%;
    max-width: 19em;
    margin: 0.8em auto 0;
  }
`
const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  gap: 2.375em;
  margin: 3.9375em 0 0 0;

  & Button:nth-of-type(1) {
    width: 9.375em;
    height: 3.125em;
    color: #fff;
    background-color: #f9b640;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & Button:nth-of-type(1):hover {
    background-color: #eea11d;
    border-radius: 1.41em;
  }
  & Button:nth-of-type(2) {
    position: relative;

    & span::after {
      content: '';
      width: 100%;
      height: 2px;
      background-color: #2144a3;
      transform: scale(0);
      transform-origin: center;
      transition: 0.3s;
      position: absolute;
      left: 0;
      bottom: -8px;
    }
    & span:hover::after {
      color: #eea11d;
      transform: scale(1);
    }
  }

  @media (max-width: 1200px) {
    margin: 2.8em 0 0 0;
  }

  @media (max-width: 992px) {
    margin: 2.53333em 0 0 0;
    gap: 30px;
  }

  @media (max-width: 768px) {
    margin: 2.2em auto 0;
  }

  @media (max-width: 544px) {
    gap: 0;
    max-width: 330px;
    width: 100%;
    display: block;
    align-items: initial;
    position: relative;
    padding: 0 12.5px 0;
    margin: 1.7em auto 0;

    & Button:nth-of-type(1) {
      margin: 0 0 0 0;
    }
    & Button:nth-of-type(2) {
      margin: 15px 0 0 0;
      float: right;
      text-align: right;
    }
  }

  @media (max-width: 320px) {
    margin: 1.4em auto 0;
    padding: 0 20px 0;
    & Button:nth-of-type(2) {
      margin: 22.5px 0 0 0;
    }
  }
`
const SecondPart = styled.div`
  width: 15%;
  position: relative;
  right: 0;
  top: 0;
  z-index: 1;
  background-color: var(--color-intro-right);

  @media (max-width: 768px) {
    font-size: 16px;
    width: 100%;
    background: none;
    padding: 3.125em 0;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: -1;
      width: 0;
      height: 0;
      border-bottom: 520px solid var(--color-intro-right);
      border-left: 100vw solid transparent;
    }
  }

  @media (max-width: 544px) {
    &::after {
      top: 0;
      border-bottom: 0;
      border-left: 0;
      border-top: 21.6667em solid var(--color-intro-right);
      border-right: 100vw solid transparent;
    }
  }

  @media (max-width: 320px) {
    font-size: 13px;
    padding: 2.8em 0;
  }
`
const Figure = styled.div`
  font-size: 16px;
  width: 50.625em;
  height: 34.0625em;
  background: #edfdff;
  border-radius: 19.6875em;

  &:nth-of-type(1) {
    position: absolute;

    left: -22.5em;
    top: 2.1875em;
    transform: matrix(-0.5, 0.87, 0.87, 0.5, 0, 0);
  }
  &:nth-child(2) {
    position: relative;
    left: -22.1875em;
    top: 7.1875em;
    transform: matrix(-0.87, 0.5, 0.5, 0.87, 0, 0);
    display: flex;
    overflow: hidden;
  }
  &:nth-child(2)::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    /* Градиент в виде небольшого оттенка белого */
    background: linear-gradient(
      213.71deg,
      #ffffff 11.23%,
      rgba(255, 255, 255, 0) 48.4%
    );
    transform: scale(-1, 1);
  }

  @media (max-width: 1440px) {
    &:nth-child(1) {
      left: -25.75em;
      top: 2.1875em;
    }
    &:nth-child(2) {
      left: -25.6875em;
      top: 7.1875em;
    }
  }

  @media (max-width: 1200px) {
    font-size: 15px;

    &:nth-child(1) {
      left: -25.5em;
      top: 1.3875em;
    }
    &:nth-child(2) {
      left: -25.1875em;
      top: 6.3875em;
    }
  }

  @media (max-width: 992px) {
    font-size: 14px;

    &:nth-child(1) {
      left: -28.1875em;
      top: 1.3em;
    }
    &:nth-child(2) {
      left: -28.6875em;
      top: 6.3875em;
    }
  }

  @media (max-width: 768px) {
    font-size: inherit; /* 16px and 12.5px */
    position: relative;
    width: 85%;
    height: 26.25em;
    border-radius: 3.4em;
    margin: 0 auto;

    &:nth-of-type(1) {
      display: none;
    }
    &:nth-of-type(2) {
      left: auto;
      top: 50%;
      transform: translate(0, -50%);
    }
    &:nth-of-type(2)::after {
      transform: scale(1, 1);
    }
  }

  @media (max-width: 544px) {
    width: 17.5em;
    height: 17.5em;
    border: 0.625em solid #edfdff;
    border-radius: 50%;
  }
`
const FigureImage = styled.img`
  font-size: inherit;
  position: absolute;
  object-fit: cover;
  left: -2%;
  top: -35%;
  width: auto;
  min-width: 70.375em;
  height: 46.875em;

  /* Изображение выравниваем по горизонтали - повторением поворота для родителя */
  transform: matrix(-0.87, 0.5, 0.5, 0.87, 0, 0);

  @media (max-width: 768px) {
    transform: translate(-50%, 0);
    left: 41%;
    top: 0;
    width: 100%;
    max-width: initial;
    min-width: 770px;
    height: auto;
    min-height: 100%;
  }

  @media (max-width: 544px) {
    top: 55%;
    left: 40%;
    width: auto;
    min-width: initial;
    height: 19em; /* 16px - font-size */
    min-height: 0;
    transform: translate(-50%, -50%);
  }
`

export default function Intro() {
  const navRef = useRef(null)

  useEffect(() => {
    navRef.current = document.querySelector('header')
  }, [])

  const scrollToBlock = elementId => {
    const block = document.getElementById(elementId)
    const valueToBlock =
      block.getBoundingClientRect().top +
      window.scrollY -
      navRef.current.offsetHeight

    window.scrollTo({
      top: valueToBlock,
      behavior: 'smooth',
    })
  }

  return (
    <Block id="intro">
      <Background>
        <BackgroundColor posLeft />
        <BackgroundColor />
      </Background>

      <IntroBody>
        <FirstPart>
          <Container>
            <Inner>
              <Logo>Thrivetalk</Logo>

              <Title>HELPING YOU THRIVE IN ALL AREAS OF LIFE</Title>

              <Text introText>
                Our highly talented therapists can help you with a range of
                issues including relationships, sex, PTSD, depression,
                social anxiety, or even just caring for yourself more.
              </Text>

              <Links>
                <Button
                  text="Who am I"
                  onClick={elementId => scrollToBlock('about')}
                />
                <Button
                  text="What do I do"
                  onClick={elementId => scrollToBlock('benefits')}
                />
              </Links>
            </Inner>
          </Container>
        </FirstPart>

        <SecondPart>
          <Figure></Figure>

          <Figure>
            <FigureImage src={interview} alt="There is an interview" />
          </Figure>
        </SecondPart>
      </IntroBody>
    </Block>
  )
}
