import * as actions from './tour.actions';

import { getTourList } from '../../apis/tour.api';

export const fetchTourList = () => {
  return async (dispatch) => {
    dispatch(actions.getTourListStart());

    try {
      const response = await getTourList();
      dispatch(actions.getTourListSuccess(response.data.data));
    } catch (error) {
      dispatch(actions.getTourListFailure(error.message));
    }
  };
};
