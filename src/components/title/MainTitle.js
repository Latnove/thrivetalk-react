import styled from 'styled-components'

const MainTitle = styled.h3`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4375em;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-dark-blue);

  @media (max-width: 544px) {
    font-size: 14px;
  }
  @media (max-width: 320px) {
    font-size: 12.5px;
  }
`

export default MainTitle
