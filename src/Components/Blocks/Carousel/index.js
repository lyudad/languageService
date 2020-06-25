import React from 'react'
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import './index.css';
import {Row, Col, Carousel} from 'antd';
import {ContainerStyle} from './style'


export const ContentCarousel = ({elem}) => {
<<<<<<< HEAD
    return (
        <ContainerStyle>
            <Carousel autoplay>
                <h3> <img alt="example" src={elem} style={{height: "240px"}}/></h3>
                <h3><img alt="example" src={elem+1} style={{height: "240px"}}/></h3>
=======
      return (
        <ContainerStyle>
            <Carousel autoplay>
               <h3> <img alt="example" src={elem} style={{height: "240px"}}/></h3>
            <h3><img alt="example" src={elem+1} style={{height: "240px"}}/></h3>
>>>>>>> d61927b8f321e81a3afab4a4308d6e5f2256a213
            </Carousel>
        </ContainerStyle>
    )
}