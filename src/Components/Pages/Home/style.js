import styled from 'styled-components'

export const Content = styled.div`
  
  margin: 0;
  position: relative;
  @media screen and (max-width: 500px) {
    overflow-y: auto;
    max-height: initial;
  }
`

export const HeaderStyle = styled.div`
  
  background-color: #61dafb;
  min-height: 50px;
`