import { createReducer } from "Helpers/redux";

import {
  ADD_TO_LEARNED_WORDS,
  ADD_TO_VOCABULARY,
} from "Redux/actions/gameCards";

const initialState = {
  vocabulary: [
    {
      id: 1,
      en: "abandon",
      ru: "оставить",
    },
    {
      id: 2,
      en: "abate",
      ru: "уменьшаться",
    },
    {
      id: 3,
      en: "abduct",
      ru: "похищать",
    },
    {
      id: 984,
      en: "consult",
      ru: "советоваться",
    },
    {
      id: 985,
      en: "consume",
      ru: "потреблять",
    },
    {
      id: 986,
      en: "contain",
      ru: "содержать",
    },
    {
      id: 2074,
      en: "grow up",
      ru: "вырастать",
    },
    {
      id: 2075,
      en: "growl",
      ru: "рычать",
    },
    {
      id: 2076,
      en: "grudge",
      ru: "обида, злоба",
    },
    {
      id: 2077,
      en: "grumble",
      ru: "ворчать",
    },
  ],
  learnedWords: [],
};

const gameCardsReducer = {
  [ADD_TO_LEARNED_WORDS]: (state, action) => {
    let newlearnedWords = state.learnedWords;
    newlearnedWords.push(action.data);
    return { ...state, learnedWords:newlearnedWords };
  },
};

export default createReducer(initialState, gameCardsReducer);
