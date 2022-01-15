import { createSelector } from 'reselect';

export const tourSelector = createSelector(
  (state) => state.tour,
  (tour) => tour.tours
);

export const totalTourSelector = createSelector(
  (state) => state.tour,
  (tour) => tour.totalTours
);
