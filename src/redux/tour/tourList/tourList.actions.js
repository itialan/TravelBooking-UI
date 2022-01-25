import TourListActionTypes from './tourList.types';

export const getTourListStart = () => ({
  type: TourListActionTypes.GET_TOUR_LIST_START,
});

export const getTourListSuccess = (payload) => ({
  type: TourListActionTypes.GET_TOUR_LIST_SUCCESS,
  payload,
});

export const getTourListFailure = (payload) => ({
  type: TourListActionTypes.GET_TOUR_LIST_FAILURE,
  payload,
});
