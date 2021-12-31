import * as actions from './destination.actions';

import { getDestinationList } from '../../apis/destination.api';

export const fetchDestinationList = () => {
  return async (dispatch) => {
    dispatch(actions.getDestinationListStart());

    try {
      const response = await getDestinationList();
      if (response.data) {
        dispatch(actions.getDestinationListSuccess(response.data.data));
      }
    } catch (error) {
      dispatch(actions.getDestinationListFailure(error.message));
    }
  };
};
