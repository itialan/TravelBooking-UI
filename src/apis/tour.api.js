import { getData } from './commonFetching.api';
import { axiosInstance } from '../services/httpRequest';

// export const getTourList = () => getData('/tours');

export const getTourList = (query) => {
  const response = axiosInstance.get(`/tours${query}`);
  return response;
};

export const getTourItem = (id) => {
  const response = axiosInstance.get(`/tours/${id}`);
  return response;
};

export const postTourItem = (data) => {
  const response = axiosInstance.post('/tours', data);
  return response;
};
