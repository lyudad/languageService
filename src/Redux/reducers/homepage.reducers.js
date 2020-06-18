import {SHOW_CONTENT} from "../actions/homepage.actions"

const initialState = {
    contentCards: [
        {
            id: 1,
            name: "Video",
            url: "https://youtu.be/MixZfUIiSvY",
            type: "image | video",
            difficulty: 3,
        },
        {
            id: 2,
            name: "Буква «A»",
            url: "https://lim-english.com/uploads/images/all/alphabet/Alphabet_new/a-letter.png",
            type: "image|video",
            difficulty: 3,
        },
        {
            id: 3,
            name: "Буква «B»",
            url: "https://lim-english.com/uploads/images/all/alphabet/Alphabet_new/b-letter.png",
            type: "image|video",
            difficulty: 3,
        },
        {   id: 4,
            name: "Буква «C»",
            url: "https://lim-english.com/uploads/images/all/alphabet/Alphabet_new/c-letter.png",
            type: "image|video",
            difficulty: 3,
        },
        {
            id: 5,
            name: "Буква «D»",
            url: "https://lim-english.com/uploads/images/all/alphabet/Alphabet_new/d-letter.png",
            type: "image | video",
            difficulty: 3,
        },
        {
            id: 6,
            name: "Буква «E»",
            url: "https://lim-english.com/uploads/images/all/alphabet/Alphabet_new/e-letter.png",
            type: "image|video",
            difficulty: 3,
        },
    ],
    showContent: null
}
//
export const homepage = (state = initialState, action) => {

    switch ("") {
        default:
            return state

    }
}
