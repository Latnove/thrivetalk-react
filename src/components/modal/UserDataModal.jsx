import React, { useState } from 'react'
import styled from 'styled-components'
import { Icons } from '../icons'

const Modal = styled.div`
  width: 550px;
  background: #fffafa;
  border: 2px #191970 solid;
  border-radius: 10px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  overflow: auto;
  transition: all 0.6s;
  &._active {
    transform: translate(-50%, -50%) scale(1);
    transition: all 0.6s;
  }
  @media (max-width: 1200px) {
    height: 80vh;
    max-height: 570px;
  }
  @media (max-width: 992px) {
    height: 92vh;
    max-height: 545px;
  }
  @media (max-width: 768px) {
    width: 80%;
    max-width: 550px;
    height: 90vh;
    max-height: 505px;
  }
  @media (max-width: 544px) {
    width: 85%;
    height: 85vh;
    max-height: 370px;
  }
  @media (max-width: 440px) {
    height: 90vh;
    max-height: 315px;
  }
  @media (max-width: 320px) {
    height: 92vh;
    max-height: 270px;
  }
`
const Content = styled.div`
  padding: 55px 40px 70px;
  @media (max-width: 992px) {
    padding: 45px 35px 60px;
  }
  @media (max-width: 768px) {
    padding: 35px 25px 45px;
  }
  @media (max-width: 544px) {
    padding: 30px 20px 35px;
  }
  @media (max-width: 320px) {
    padding: 20px 15px 23px;
  }
`
const Title = styled.h2`
  font-size: 24px;
  color: #002845;
  @media (max-width: 544px) {
    font-size: 22px;
  }
  @media (max-width: 320px) {
    font-size: 18px;
  }
`
const Text = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #002845;
  & p:nth-of-type(1) {
    margin: 1.5625em 0 0 0;
  }
  & p:nth-of-type(2) {
    margin: 0.9375em 0 0 0;
  }
  @media (max-width: 992px) {
    & p:nth-of-type(1) {
      margin: 1.35em 0 0 0;
    }
  }
  @media (max-width: 768px) {
    & p:nth-of-type(1) {
      margin: 1em 0 0 0;
    }
    & p:nth-of-type(2) {
      margin: 0.7em 0 0 0;
    }
  }
  @media (max-width: 544px) {
    font-size: 14.5px;
    & p:nth-of-type(1) {
      margin: 0.8em 0 0 0;
    }
    & p:nth-of-type(2) {
      margin: 0.6em 0 0 0;
    }
  }
  @media (max-width: 320px) {
    font-size: 13px;
    & p:nth-of-type(1) {
      margin: 0.7em 0 0 0;
    }
    & p:nth-of-type(2) {
      margin: 0.5em 0 0 0;
    }
  }
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 30px 0 0 0;
  & button[type='submit'] {
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.02em;
    color: #fc03a1;
    cursor: pointer;
    background: initial;
    border: 2px solid #fc03a1;
    border-radius: 4px;
    width: 8.4375em;
    height: 2.8125em;
    transition: all 0.3s;
    margin: 8px 0 0 0;
  }
  & button[type='submit']:hover,
  & button[type='submit']:focus {
    color: #0a8a61;
    outline: initial !important;
    border: 2px solid #076e4d;
  }

  @media (max-width: 768px) {
    margin: 22px 0 0 0;
  }
  @media (max-width: 544px) {
    gap: 8px;
    margin: 18px 0 0 0;
    & button[type='submit'] {
      font-size: 15px;
      margin: 6px 0 0 0;
    }
  }
  @media (max-width: 320px) {
    gap: 6px;
    margin: 14px 0 0 0;
    & button[type='submit'] {
      font-size: 13.5px;
      margin: 5px 0 0 0;
    }
  }
`
const Column = styled.div`
  font-size: 18px;
  position: relative;
  & input {
    font-size: inherit;
    color: #291970;
    height: 2.91666em;
    width: 100%;
    border: initial;
    border-radius: 0.22222em;
    background-color: #dcdcdc;
    padding: 0 0.833333em 0 calc(0.66666em + 0.833333em + 1.11111em);
  }
  & input:focus {
    outline: none;
    border: 2px solid #4b0082;
    background-color: #fff0f5 !important;
    margin: 0;
  }
  & svg {
    font-size: inherit;
    position: absolute;
    left: 0.83333em;
    top: 0.91666em;
  }
  & input:focus + svg {
    fill: #291970;
  }
  & input:-webkit-autofill {
    box-shadow: inset 0 0 0 50px #dcdcdc !important; /* Цвет фона */
    -webkit-text-fill-color: #291970 !important; /* цвет текста */
    color: #291970 !important; /* цвет текста */
  }
  & input::placeholder {
    font-size: 16px;
    color: #778899;
  }
  @media (max-width: 544px) {
    font-size: 16px;
    & svg {
      width: 18px;
      top: 0.85em;
    }
    & input::placeholder {
      font-size: 15px;
      color: #778899;
    }
  }
  @media (max-width: 320px) {
    font-size: 14px;
    & svg {
      width: 16px;
      top: 0.75em;
    }
    & input::placeholder {
      font-size: 13px;
      color: #778899;
    }
  }
`

export default React.forwardRef(function ClickModal({ background }, ref) {
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    background.current.classList.remove('_active')
    ref.current.classList.remove('_active')
  }

  return (
    <Modal ref={ref}>
      <Content>
        <Title>Hi, not a bad choice!</Title>
        <Text>
          <p>
            Need help urgently? So, what are you waiting for. Enter the
            data as soon as possible and get a free consultation from our
            employees within 10 minutes!
          </p>
          <p>
            Fear not, this data is only stored in our database. If you
            refuse help, they are automatically deleted. Thank you my
            friend!
          </p>
        </Text>

        <Form onSubmit={e => handleSubmit(e)} action="/click-popup-data">
          <Column>
            <input
              type="text"
              name="fullName"
              value={fullName}
              placeholder="Full Name:"
              onChange={e => {
                setFullName(e.target.value)
              }}
              required
            />
            <Icons name="name" color="#778899" size="20" />
          </Column>

          <Column>
            <input
              type="tel"
              name="phone"
              value={phone}
              placeholder="Phone:"
              onChange={e => {
                setPhone(e.target.value)
              }}
              required
            />
            <Icons name="phone" color="#778899" size="20" />
          </Column>

          <Column>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Email-account:"
              onChange={e => {
                setEmail(e.target.value)
              }}
              required
            />
            <Icons name="email" color="#778899" size="20" />
          </Column>

          <button type="submit">Get Help</button>
        </Form>
      </Content>
    </Modal>
  )
})
