import { createSelector } from "reselect";

const getUser = state => state.user;

export const getUpdatedUser = createSelector(
  [getUser],
  user => {
    return user;
  }
);
