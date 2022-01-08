// libraries
import axios from 'axios';
import Cookies from 'js-cookie';

// constants
import { URL } from '../constants/paths';

const getToken = () => Cookies.get('jwt');

export const axiosInstance = axios.create({
  baseURL: URL.HOST + URL.BASE_API,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
