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

export const GameStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 240px;
  height: 240px;
  margin-bottom: 10px;
  background-color: #61dafb;
  color: #fff;
  border: 2px solid green;
  box-shadow: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  justify-content: center;
  margin: 10px auto;
  `

export const FooterStyle = styled.div`
  background-color: #61dafb;
  min-height: 50px;
  
`