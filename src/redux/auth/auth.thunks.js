import * as actions from './auth.actions';

// apis
import { signin } from '../../apis/user.api';

// paths
import { PATH } from '../../constants/paths';

export const signInWithEmailAndPassword = (email, password, history) => {
  return async (dispatch) => {
    dispatch(actions.signInRequest());

    const response = await signin({ email, password });
    if (response.status === 'success') {
      const user = response.data.user;
      dispatch(actions.signInSuccess(user));

      localStorage.setItem('token', response.token);
      history.push(PATH.HOME);
    } else if (response.status === 'fail') {
      dispatch(actions.signInFailure(response.message));
    }
  };
};
