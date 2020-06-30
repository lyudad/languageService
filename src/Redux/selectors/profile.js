import { createSelector } from "reselect";

const getUserData = store => store.auth.user

export const getUser = createSelector(
    getUserData,
    userData => userData
)