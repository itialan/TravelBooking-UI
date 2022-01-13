import { createSelector } from 'reselect';

export const userSelector = createSelector(
  (state) => state.auth,
  (auth) => auth.currentUser
);
