import TourListActionTypes from './tourList.types';

const INITIAL_STATE = {
  tours: [],
  totalTours: 0,
  isFetching: false,
  errorMessage: undefined,
};

const tourListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TourListActionTypes.GET_TOUR_LIST_START:
      return {
        ...state,
        isFetching: true,
      };
    case TourListActionTypes.GET_TOUR_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        tours: action.payload.data,
        totalTours: action.payload.total,
      };
    case TourListActionTypes.GET_TOUR_LIST_FAILURE:
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
