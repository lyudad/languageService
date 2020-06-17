import React from "react";
import { connect } from "react-redux";

import { GameCard } from "./Blocks/GameCard";

const CardFlipGame = ({ vocabulary }) => {
  return <GameCard vocabulary={vocabulary} />;
};

const mapStateToProps = (store) => {
  return {
    vocabulary: store.gameCards.vocabulary,
  };
};
const mapDispathToProps = {};

export default connect(mapStateToProps, mapDispathToProps)(CardFlipGame);
