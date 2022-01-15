import { createSelector } from 'reselect';

export const routeSelector = createSelector(
  (state) => state.destination,
  (destination) => destination.destinations
);
