import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 240px;
  height: 100%;
  align-content: flex-start;
  position: relative;
  
  @media screen and (max-width: 799px) {
    flex: 1;
  }
  @media screen and (max-width: 700px) {
    justify-content: center;
  }
  @media screen and (min-width: 1700px) {
    justify-content: center;
  }
  @media screen and (max-width: 950px) {
    justify-content: center;
  }
  @media screen and (min-width: 500px) and (max-width: 800px) {
    align-items: center;
    justify-content: flex-start;
  }
  @media screen and (max-width: 500px) {
    overflow-y: auto;
  }
`