import { createSelector } from "reselect";

const industriesData = store => store.industries;

export const getIndustries = createSelector(
  industriesData,
  data => data.industriesD
);
