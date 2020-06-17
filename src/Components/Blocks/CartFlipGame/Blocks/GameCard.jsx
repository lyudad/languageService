import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import { Card } from "antd";
import { GameCardButton } from "../styles";

export const GameCard = ({ vocabulary }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [wordlist, setWordlist] = useState(vocabulary);
  const [indexWord, setIndexWord] = useState(0);

  const [studiedWords, setStudiedWords] = useState([]);

  //const [endGame, setEndGame] = useState(false);

  useEffect(() => {
    console.log(`>>> render <<<`);
  });

  const frontGreenButtonClick = () => {
    setIsFlipped(!isFlipped);
  };
  const frontRedButtonClick = () => {
    setIsFlipped(!isFlipped);
  };

  const backGreenButtonClick = () => {
    setIsFlipped(!isFlipped);
    let newStudiedWords = studiedWords;
    newStudiedWords.push(wordlist[indexWord]);
    if (indexWord !== wordlist.length - 1) {
      setIndexWord(indexWord + 1);
    } else {
      //setEndGame(true);
    }
  };
  const backRedButtonClick = () => {
    setIsFlipped(!isFlipped);
    if (indexWord !== wordlist.length - 1) {
      setIndexWord(indexWord + 1);
    } else {
      //setEndGame(true);
    }
  };

  return (
     <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div className="site-card-border-less-wrapper">
        <Card title="Card Flip Game" bordered={false} style={{ width: 300 }}>
          <p> </p>
          <p>{wordlist[indexWord].ru}</p>
          <p> </p>
          <GameCardButton red onClick={frontRedButtonClick}></GameCardButton>
          <GameCardButton onClick={frontGreenButtonClick}></GameCardButton>
        </Card>
      </div>

      <div className="site-card-border-less-wrapper">
        <Card title="Card title" bordered={false} style={{ width: 300 }}>
          <p> </p>
          <p>{wordlist[indexWord].en}</p>
          <p> </p>
          <GameCardButton red onClick={backRedButtonClick}></GameCardButton>
          <GameCardButton onClick={backGreenButtonClick}></GameCardButton>
        </Card>
      </div>
    </ReactCardFlip>
  );
};
