import { axiosInstance } from '../services/httpRequest';

export const getPlaces = (place) => {
  const response = axiosInstance.get(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
  );

  return response;
};
