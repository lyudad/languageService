import React from 'react'
import {
    MainContainer,
} from './style'


import  {Card}  from 'antd';
const {Meta} = Card;

export const Cards = ({elem}) => {
    console.log(elem)
    return (
        <MainContainer>
            <Card
                hoverable

                cover={<img alt="example" src={elem.url}/>}
            >
                <Meta title={elem.name}/>
                {/*
                <div>
                    Type: {elem.type}
                </div>
                <div>
                    Difficulty: {elem.difficulty}
                </div>*/}
            </Card>
        </MainContainer>
    )
}


