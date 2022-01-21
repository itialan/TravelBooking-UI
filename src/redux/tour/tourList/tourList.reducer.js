import TourActionTypes from './tourList.types';

const INITIAL_STATE = {
  tours: [],
  totalTours: 0,
  isFetching: false,
  errorMessage: undefined,
};

const tourListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TourActionTypes.GET_TOUR_LIST_START:
    case TourActionTypes.ADD_TOUR_START:
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
    case TourActionTypes.ADD_TOUR_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default tourListReducer;
