import styled from "styled-components";

export const GameCardButton = styled.button`
  background-color: ${(props) => props.red ? '#DD5145' : '#1BA160'}
  width: 55px;
  height: 25px;
  margin-left: 5px
`;
