import React from "react";
import {
  CardComponent,
  GameCardButton,
  GameCardButtonContainer,
  Word
} from "Components/Blocks/CartFlipGame/styles";

export const Card = ({
  title,
  word,
  redBtnClick,
  greenBtnClick,
  textOnRedBtn,
  textOnGreenBtn,
}) => {
  return (
    <CardComponent title={title}>
      <Word>{word}</Word>
      <GameCardButtonContainer>
        <GameCardButton red onClick={redBtnClick}>
          {textOnRedBtn}
        </GameCardButton>
        <GameCardButton green onClick={greenBtnClick}>
          {textOnGreenBtn}
        </GameCardButton>
      </GameCardButtonContainer>
    </CardComponent>
  );
};
