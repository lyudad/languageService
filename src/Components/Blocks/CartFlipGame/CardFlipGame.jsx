import React from "react";
import { GameCard } from "./Blocks/GameCard";

const CardFlipGame = ({ vocabulary, addToLearnedWords }) => {
  return (
    <GameCard vocabulary={vocabulary} addToLearnedWords={addToLearnedWords} />
  );
};

export default CardFlipGame;
