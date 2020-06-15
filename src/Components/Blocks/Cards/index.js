import React, { Component } from 'react'
import {
    MainContainer,
} from './style'


import  {Card}  from 'antd';
const { Meta } = Card;



class Cards extends Component {


  render()
  {
      console.log(this)
    return (
   
<MainContainer>

            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={this.props.elem.url}  style={{height: "240px"}} />}

            >
            <Meta title={this.props.elem.name}/>
                <div>
                    Type: {this.props.elem.type}
                </div>
              <div>
                Difficulty: {this.props.elem.difficulty}
              </div>

            </Card>
          </MainContainer>

         
    )
  }
}

export default Cards
