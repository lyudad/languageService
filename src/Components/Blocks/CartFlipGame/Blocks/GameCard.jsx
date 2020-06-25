import React, { useState, useEffect } from "react";
import { useCallbackOne } from "use-memo-one";

import { Card } from "Components/Blocks/CartFlipGame/Blocks/Card";
import { GameBox } from "Components/Blocks/CartFlipGame/styles";



export const GameCard = ({ vocabulary, addToLearnedWords }) => {
  const [isFlipped, setIsFlipped] = useState(true);
  const [indexWord, setIndexWord] = useState(0);
  const [prevIndexWord, setPrevIndexWord] = useState(0);
  const [nativeWord, setNativeWord] = useState(vocabulary[0].ru);
  const [translatedWord, setTranslatedWord] = useState(vocabulary[0].en);
  const [startGame, setStartGame] = useState(true);

  useEffect(() => {
    if (indexWord !== prevIndexWord) {
      setNativeWord(vocabulary[indexWord].ru);
      setPrevIndexWord(indexWord);
    }
  }, [indexWord, prevIndexWord]);

  useEffect(() => {
    if (prevIndexWord !== 0 && indexWord == prevIndexWord) {
      setIsFlipped(!isFlipped);
      setTranslatedWord(vocabulary[indexWord].en);
    }
  }, [indexWord, prevIndexWord]);

  const frontGreenButtonClick = () => {
    setIsFlipped(!isFlipped);
  };
  const frontRedButtonClick = () => {
    setIsFlipped(!isFlipped);
  };

  const backGreenButtonClick = () => {
    nextWord();
    addToLearnedWords(vocabulary[indexWord]);
  };
  const backRedButtonClick = () => {
    nextWord();
  };
  const nextWord = () => {
    if (indexWord !== vocabulary.length - 1) {
      setIndexWord(indexWord + 1);
    } else {
      setStartGame(false);
    }
  };
  return startGame ? (
    <GameBox>
      {isFlipped ? (
        <Card
          title={"Front side"}
          word={nativeWord}
          greenBtnClick={frontGreenButtonClick}
          redBtnClick={frontRedButtonClick}
          textOnRedBtn={"Not"}
          textOnGreenBtn={"Know"}
        />
      ) : (
        <Card
          title={"Backside"}
          word={translatedWord}
          greenBtnClick={backGreenButtonClick}
          redBtnClick={backRedButtonClick}
          textOnRedBtn={"Not"}
          textOnGreenBtn={"Know"}
        />
      )}
    </GameBox>
  ) : (
    <p>end game</p>
  );
};
