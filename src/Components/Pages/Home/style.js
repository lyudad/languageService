import styled from 'styled-components'

export const Content = styled.div`
  max-height: calc(100vh - 35px);
  margin: 0;
  position: relative;
  @media screen and (max-width: 500px) {
    overflow-y: auto;
    max-height: initial;
  }
`
