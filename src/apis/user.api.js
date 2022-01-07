import { postData } from './commonFetching.api';
import { axiosInstance } from '../services/httpRequest';

export const signin = (data) => postData('/users/login', data);

//export const checkSession = (token) => postData('users/checkSession', token);

export const checkSession = () => {
  const response = axiosInstance.get('/users/checkSession');
  return response;
};
