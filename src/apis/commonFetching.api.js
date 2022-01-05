import axios from 'axios';

import { URL } from '../constants/paths';

export const getData = async (endpoint) => {
  try {
    const response = await axios({
      method: 'GET',
      url: `${URL.HOST}/api/v1/${endpoint}`,
    });

    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
  }
};

export const postData = async (endpoint, data) => {
  try {
    const response = await axios({
      method: 'POST',
      url: `${URL.HOST}/api/v1/${endpoint}`,
      data,
    });

    return response.data;
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};
