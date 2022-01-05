import AuthActionTypes from './auth.types';

export const signInRequest = () => ({
  type: AuthActionTypes.SIGNIN_REQUEST,
});

export const signInSuccess = (user) => ({
  type: AuthActionTypes.SIGNIN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: AuthActionTypes.SIGNIN_FAILURE,
  payload: error,
});

export const signOut = () => ({
  type: AuthActionTypes.SIGNOUT,
});
