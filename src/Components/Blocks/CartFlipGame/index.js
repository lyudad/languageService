import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CardFlipGame from "Components/Blocks/CartFlipGame/CardFlipGame";
import { getVocabulary } from "Redux/selectors/vocabulary";
import { addToLearnWordsActions } from "Redux/actions/gameCards";

const selector = createStructuredSelector({
  vocabulary: getVocabulary,
});

const mapDispathToProps = {
  addToLearnedWords: addToLearnWordsActions,
};

export default connect(selector, mapDispathToProps)(CardFlipGame);
