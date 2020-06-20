import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import { Card as CardComponent } from "antd";
import { GameCardButton } from "Components/Blocks/CartFlipGame/styles";
import { set } from "lodash";

export const GameCard = ({ vocabulary, addToLearnedWords }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  // const [endGame, setEndGame] = useState(false);

  useEffect(() => {
    console.log(`render`, vocabulary);
  });

  const frontGreenButtonClick = () => {
    setIsFlipped(!isFlipped);
  };
  const frontRedButtonClick = () => {
    setIsFlipped(!isFlipped);
  };
  const backGreenButtonClick = () => {
    setIsFlipped(!isFlipped);
    addToLearnedWords(vocabulary.shift());
  };
  const backRedButtonClick = () => {
    setIsFlipped(!isFlipped);
    vocabulary.push(vocabulary.shift());
  };

  // для End Game сделать отдельную переменную?
  // const backRedButtonClick = () => {
  //   if (vocabulary.length) {
  //     setIsFlipped(!isFlipped);
  //     vocabulary.push(vocabulary.shift());
  //   } else setEndGame(true);
  // };

  return vocabulary.length ? (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div className="site-card-border-less-wrapper">
        <CardComponent
          title="Card Flip Game"
          bordered={false}
          style={{ width: 300 }}
        >
          <p></p>
          <p>{vocabulary[0].ru}</p>
          <p></p>
          <GameCardButton red onClick={frontRedButtonClick}>
            Not
          </GameCardButton>
          <GameCardButton onClick={frontGreenButtonClick}>Know</GameCardButton>
        </CardComponent>
      </div>

      <div className="site-card-border-less-wrapper">
        <CardComponent
          title="Card title"
          bordered={false}
          style={{ width: 300 }}
        >
          <p></p>
          <p>{vocabulary[0].en}</p>
          <p></p>
          <GameCardButton red onClick={backRedButtonClick}>
            Not
          </GameCardButton>
          <GameCardButton onClick={backGreenButtonClick}>Know</GameCardButton>
        </CardComponent>
      </div>
    </ReactCardFlip>
  ) : (
    <p>end game</p>
  );
};
