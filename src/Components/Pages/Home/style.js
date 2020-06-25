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


export const CarouselStyle = styled.div`
    border: 2px solid blue;
    text-align: center;
    height: 250px
    line-height: 50px;
    background-color: #364d79;
    overflow: hidden;
    margin: 5px 50px
    
    color: #fff;
    justify-content: center;
`

// .ant-carousel .slick-slide {
//     text-align: center;
//     height: 160px;
//     line-height: 160px;
//     background: #364d79;
//     overflow: hidden;
// }
//
// .ant-carousel .slick-slide h3 {
//     color: #fff;
// }