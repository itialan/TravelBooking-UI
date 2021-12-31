import DestinationActionTypes from './destination.types';

const INITIAL_STATE = {
  destinations: [],
  isFetching: false,
  errorMessage: undefined,
};

const destinationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DestinationActionTypes.GET_DESTINATION_LIST_START:
      return {
        ...state,
        isFetching: true,
      };
    case DestinationActionTypes.GET_DESTINATION_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        destinations: action.payload,
      };
    case DestinationActionTypes.GET_DESTINATION_LIST_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default destinationReducer;
