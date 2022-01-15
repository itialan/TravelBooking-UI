import TourActionTypes from './tour.types';

const INITIAL_STATE = {
  tours: [],
  totalTours: 0,
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
        tours: action.payload.data,
        totalTours: action.payload.total,
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
