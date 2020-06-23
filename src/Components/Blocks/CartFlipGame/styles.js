import styled from "styled-components";
import { Card } from "antd";

export const GameBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardComponent = styled(Card)`
  width: 270px;
  height: 200px;
  border-radius: 28px;
  background-color: #f6f6f6;
`;

export const GameCardButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GameCardButton = styled.button`
background-color: ${(props) => (props.red ? "#DD5145" : "#1BA160")}
  width: 55px;
  height: 25px;
  outline: none;
`;

export const Word = styled.p`
margin-left:30%`;
