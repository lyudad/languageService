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
                style={{ width: 240 }}
                cover={<img alt="example" src={elem.url}  style={{height: "240px"}} />}
            >
                <Meta title={elem.name}/>
                <div>
                    Type: {elem.type}
                </div>
                <div>
                    Difficulty: {elem.difficulty}
                </div>
            </Card>
        </MainContainer>
    )
}


