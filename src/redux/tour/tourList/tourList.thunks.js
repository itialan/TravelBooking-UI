import * as actions from './tourList.actions';

// apis
import { getTourList } from '../../../apis/tour.api';

export const fetchTourList = (query = '') => {
  return async (dispatch) => {
    dispatch(actions.getTourListStart());

    try {
      const response = await getTourList(query);
      if (response.data) {
        dispatch(actions.getTourListSuccess(response.data.data));
      }
    } catch (error) {
      dispatch(actions.getTourListFailure(error.message));
    }
  };
};
