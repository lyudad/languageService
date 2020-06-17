export const ADD_TO_LEARNED_WORDS = "ADD_TO_LEARNED_WORDS";
export const ADD_TO_VOCABULARY = "ADD_TO_VOCABULARY";

export const addToLearnWordsActions = (data) => {
  return { type: ADD_TO_LEARNED_WORDS, data };
};

export const addToVocabulary = (data) => {
  return { type: ADD_TO_VOCABULARY, data };
};
