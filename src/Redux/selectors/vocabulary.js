import { createSelector } from "reselect";

const getVocabularyData = store => store.gameCards.vocabulary

export const getVocabulary = createSelector(
    getVocabularyData,
    vocabulary => vocabulary
)