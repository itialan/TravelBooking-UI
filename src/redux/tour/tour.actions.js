import TourActionTypes from './tour.types';

export const getTourListStart = () => ({
  type: TourActionTypes.GET_TOUR_LIST_START,
});

export const getTourListSuccess = (payload) => ({
  type: TourActionTypes.GET_TOUR_LIST_SUCCESS,
  payload,
});

export const getTourListFailure = (payload) => ({
  type: TourActionTypes.GET_TOUR_LIST_FAILURE,
  payload,
});
