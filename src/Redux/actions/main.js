export const SET_HEADER_CAT = 'main/SET_HEADER_CAT'
export const setHeaderCat = catID => {
    return {
        type:SET_HEADER_CAT,
        payload:catID
    }
}