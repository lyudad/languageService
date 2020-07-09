
import { createSelector } from "reselect";

const homeData = store => store.homepage;

export const getContent = createSelector(
    homeData,
    data => data.contentCard.slice(5),
 );



