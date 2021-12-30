import axios from 'axios';

import { URL } from '../constants/paths';

export const getTourList = async () => {
  try {
    const response = await axios({
      method: 'GET',
      url: `${URL.HOST}/api/v1/tours`,
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
