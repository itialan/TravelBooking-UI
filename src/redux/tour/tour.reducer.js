import TourActionTypes from './tour.types';

const INITIAL_STATE = {
  tours: [],
  isFetching: false,
  errorMessage: undefined,
};

const tourReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TourActionTypes.GET_TOUR_LIST_START:
      return {
        ...state,
        isFetching: true,
      };
    case TourActionTypes.GET_TOUR_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        tours: action.payload,
      };
    case TourActionTypes.GET_TOUR_LIST_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default tourReducer;
