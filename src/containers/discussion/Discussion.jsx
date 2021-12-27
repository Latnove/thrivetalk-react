import React from 'react'
import { Container, MainText } from '../../components'
import { stand_girl } from '../../assets/images/images.js'

export default function Discussion() {
  return (
    <DiscussionBlock className="discussion">
      <Inner>
        <Container>
          <Title>Why Thrive?</Title>
          <MainText>
            Want to improve your well-being from the comfort of your own
            couch? Are you having trouble finding the right therapist?
            <span>
              Here at ThriveTalk, our licensed therapists provide the same
              quality care you would get in office from anywhere you can
              access your laptop or mobile phone. Become your best self
              with ThriveTalk. Start therapy now with a licensed therapist!
            </span>
          </MainText>
        </Container>
        <Image>
          <BlueLine></BlueLine>
          <img src={stand_girl} alt="There is a girl" />
        </Image>
      </Inner>
    </DiscussionBlock>
  )
}
