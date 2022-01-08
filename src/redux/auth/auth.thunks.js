import * as actions from './auth.actions';

// apis
import Cookies from 'js-cookie';
import { signin, checkSession } from '../../apis/user.api';

// paths
import { PATH } from '../../constants/paths';

export const signInWithEmailAndPassword = (email, password, history) => {
  return async (dispatch) => {
    dispatch(actions.signInRequest());

    const response = await signin({ email, password });
    if (response.status === 'success') {
      const user = response.data.user;
      const isAuth = user ? true : false;
      dispatch(actions.signInSuccess({ user, isAuth }));

      Cookies.set('jwt', response.token);
      history.push(PATH.HOME);
    } else if (response.status === 'fail') {
      dispatch(actions.signInFailure(response.message));
    }
  };
};

export const checkUserSession = () => {
  return async (dispatch) => {
    const token = Cookies.get('jwt');
    if (token) {
      const response = await checkSession(token);
      const user = response.data.data.user;
      const isAuth = user ? true : false;
      dispatch(actions.checkUserSession({ user, isAuth }));
    }
  };
};

export const signOut = (history) => {
  return (dispatch) => {
    Cookies.remove('jwt');
    dispatch(actions.signOut());
    history.push(PATH.SIGNIN);
  };
};
