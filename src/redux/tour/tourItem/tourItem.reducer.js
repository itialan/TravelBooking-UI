import TourItemActionTypes from './tourItem.types';

const INITIAL_STATE = {
  tourItem: null,
  isFetching: false,
  errorMessage: undefined,
};

const tourItemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TourItemActionTypes.GET_TOUR_ITEM_START:
    case TourItemActionTypes.CREATE_TOUR_ITEM_START:
      return {
        ...state,
        isFetching: true,
      };
    case TourItemActionTypes.GET_TOUR_ITEM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        tourItem: action.payload,
      };
    case TourItemActionTypes.CREATE_TOUR_ITEM_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case TourItemActionTypes.GET_TOUR_ITEM_FAILURE:
    case TourItemActionTypes.CREATE_TOUR_ITEM_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default tourItemReducer;
