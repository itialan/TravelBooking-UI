import TourItemActionTypes from './tourItem.types';

export const getTourItemStart = () => ({
  type: TourItemActionTypes.GET_TOUR_ITEM_START,
});

export const getTourItemSuccess = (payload) => ({
  type: TourItemActionTypes.GET_TOUR_ITEM_SUCCESS,
  payload,
});

export const getTourItemFailure = (payload) => ({
  type: TourItemActionTypes.GET_TOUR_ITEM_FAILURE,
  payload,
});

export const createTourItemStart = () => ({
  type: TourItemActionTypes.CREATE_TOUR_ITEM_START,
});

export const createTourItemSuccess = () => ({
  type: TourItemActionTypes.CREATE_TOUR_ITEM_SUCCESS,
});

export const createTourItemFailure = (payload) => ({
  type: TourItemActionTypes.CREATE_TOUR_ITEM_FAILURE,
  payload,
});
