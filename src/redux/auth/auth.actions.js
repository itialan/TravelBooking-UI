import AuthActionTypes from './auth.types';

export const signInRequest = () => ({
  type: AuthActionTypes.SIGNIN_REQUEST,
});

export const signInSuccess = (payload) => ({
  type: AuthActionTypes.SIGNIN_SUCCESS,
  payload,
});

export const signInFailure = (error) => ({
  type: AuthActionTypes.SIGNIN_FAILURE,
  payload: error,
});

export const signOut = () => ({
  type: AuthActionTypes.SIGNOUT,
});

export const checkUserSession = (payload) => ({
  type: AuthActionTypes.CHECK_USER_SESSION,
  payload,
});
