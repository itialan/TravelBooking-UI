import { getData } from './commonFetching.api';
import { axiosInstance } from '../services/httpRequest';

// export const getTourList = () => getData('/tours');

export const getTourList = (query) => {
  const response = axiosInstance.get(`/tours${query}`);
  return response;
};
