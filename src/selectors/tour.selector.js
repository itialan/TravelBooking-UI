import { createSelector } from 'reselect';

export const tourListSelector = createSelector(
  (state) => state.tourList,
  (tourList) => tourList.tours
);

export const totalTourSelector = createSelector(
  (state) => state.tourList,
  (tourList) => tourList.totalTours
);
