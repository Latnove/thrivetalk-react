import styled from 'styled-components'

const Container = styled.div`
  max-width: 1130px;
  width: 100%;
  margin: 0 auto;

  font-size: 16px;
  @media (max-width: 1200px) {
    max-width: 950px;
  }
  @media (max-width: 992px) {
    max-width: 730px;
  }
  @media (max-width: 768px) {
    max-width: none;
    padding: 0;
  }
`

export default Container
