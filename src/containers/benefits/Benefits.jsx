import React, { useEffect } from 'react'
import styled from 'styled-components'
import { BenefitsItem } from '../../components/'
import scrollAnimation from '../../components/utilities/scrollAnimation.js'

const Inner = styled.div`
  max-width: 1520px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 22px 0 0 0;
  @media (max-width: 992px) {
    max-width: 870px;
  }
  @media (max-width: 768px) {
    padding: 20px 0 0 0;
  }
  @media (max-width: 544px) {
    max-width: 460px;
    padding: 24px 0 0 0;
    div:nth-child(2n) {
      align-items: flex-end;
    }
    div:nth-child(2n + 1) {
      align-items: flex-start;
    }
  }
  @media (max-width: 320px) {
    padding: 20px 0 0 0;
    div:nth-child(2n),
    div:nth-child(2n + 1) {
      align-items: center;
    }
  }
`

export default function Benefits() {
  useEffect(() => {
    const animItems = document.querySelectorAll('.benefits-anim')
    scrollAnimation(animItems)
  }, [])

  return (
    <section id="benefits">
      <Inner>
        <BenefitsItem
          className="benefits-anim"
          title="Nutritional Plans"
          text="Nutritional Facts on some shitty things that 
          you don’t care about and even we don’t , I need to 
          replace this copy."
        />
        <BenefitsItem
          className="benefits-anim"
          title="Weight Loss"
          text="Nutritional Facts on some shitty things that 
          you don’t care about and even we don’t , I need to 
          replace this copy."
        />
        <BenefitsItem
          className="benefits-anim"
          title="Mental Peace"
          text="Nutritional Facts on some shitty things that 
          you don’t care about and even we don’t , I need to 
          replace this copy."
        />
        <BenefitsItem
          className="benefits-anim"
          title="Home Training"
          text="Nutritional Facts on some shitty things that 
          you don’t care about and even we don’t , I need to 
          replace this copy."
        />
        <BenefitsItem
          className="benefits-anim"
          title="Work/Life Balance"
          text="Nutritional Facts on some shitty things that 
          you don’t care about and even we don’t , I need to 
          replace this copy."
        />
        <BenefitsItem
          className="benefits-anim"
          title="Cardio"
          text="Nutritional Facts on some shitty things that 
          you don’t care about and even we don’t , I need to 
          replace this copy."
        />
      </Inner>
    </section>
  )
}
