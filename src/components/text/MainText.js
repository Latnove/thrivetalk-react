import styled from 'styled-components'

const MainText = styled.p`
  font-family: Larsseit;
  color: #fff;
  font-size: 24px;
  font-weight: 400;

  @media (max-width: 1200px) {
    font-size: ${props => (props.introText ? '20px' : '22px')};
  }
  @media (max-width: 768px) {
    font-size: 22px;
  }
  @media (max-width: 544px) {
    font-size: 20px;
  }
  @media (max-width: 320px) {
    font-size: 18px;
  }
`

export default MainText
