import styled from "styled-components";

export const CustomForm = styled.form`
  width: 360px;
  border-radius: 30px;
  overflow: hidden;
  padding: 40px 10px 37px 55px;
  background: -webkit-linear-gradient(top, #7579ff, #b224ef);
`;

export const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 5px;
  width: 220px;
`;
export const LabelAuth = styled.label`
  font-weight: 600;
  color: black;
`;

export const ErrorAuthParagraph = styled.p`
  font-weight: bold;
  color: red;
`;

export const CustomMsg = styled.div`
  width: 245px;
  height: 30px;
  background-color: ${(props) =>
    props.type === "SUCCESS" ? "#1B9259" : "#fe1948"};
  border-radius: 30px;
  text-align: center;
`;
