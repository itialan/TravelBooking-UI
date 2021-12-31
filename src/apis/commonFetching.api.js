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
    console.log(error);
  }
};
