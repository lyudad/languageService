import {createSelector} from "reselect";

const homepageData = store => store.homepage;

export const getContent = createSelector(
    homepageData,
    data => data.contentCard
);