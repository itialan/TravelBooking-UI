import AuthActionTypes from './auth.types';

const INITIAL_STATE = {
  currentUser: null,
  isAuth: false,
  error: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthActionTypes.SIGNIN_SUCCESS:
    case AuthActionTypes.CHECK_USER_SESSION:
      return {
        ...state,
        currentUser: action.payload.user,
        isAuth: action.payload.isAuth,
        error: null,
      };
    case AuthActionTypes.SIGNIN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case AuthActionTypes.SIGNOUT:
      return {
        ...state,
        currentUser: null,
        isAuth: false,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
