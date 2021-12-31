import DestinationActionTypes from './destination.types';

export const getDestinationListStart = () => ({
  type: DestinationActionTypes.GET_DESTINATION_LIST_START,
});

export const getDestinationListSuccess = (payload) => ({
  type: DestinationActionTypes.GET_DESTINATION_LIST_SUCCESS,
  payload,
});

export const getDestinationListFailure = (payload) => ({
  type: DestinationActionTypes.GET_DESTINATION_LIST_FAILURE,
  payload,
});
