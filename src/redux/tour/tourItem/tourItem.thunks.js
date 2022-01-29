import * as actions from './tourItem.actions';

// apis
import { getTourItem, postTourItem } from '../../../apis/tour.api';

export const fetchTourItem = (id) => {
  return async (dispatch) => {
    dispatch(actions.getTourItemStart());

    try {
      const response = await getTourItem(id);
      console.log(response);
      if (response.data.status === 'success') {
        dispatch(actions.getTourItemSuccess(response.data.data.data));
      }
    } catch (error) {
      dispatch(actions.getTourItemFailure(error.response.data.message));
    }
  };
};

export const createTourItem = (data, imageCover, images) => {
  const form = new FormData();
  form.append('name', data.name);
  form.append('duration', data.duration);
  form.append('price', data.price);
  form.append('maxGroupSize', data.maxGroupSize);
  form.append('route', data.route);
  form.append('startLocation', data.startLocation);
  form.append('summary', data.summary);
  form.append('description', data.description);
  data.locations.forEach((loc, i) => {
    form.append(`locations[${i}][type]`, loc.type);
    form.append(`locations[${i}][coordinates]`, loc.coordinates);
    form.append(`locations[${i}][address]`, loc.address);
    form.append(`locations[${i}][description]`, loc.description);
    form.append(`locations[${i}][day]`, +loc.day);
  });
  data.hotels.forEach((hotel, i) => {
    form.append(`hotels[${i}][name]`, hotel.name);
    form.append(`hotels[${i}][address]`, hotel.address);
    form.append(`hotels[${i}][startDay]`, +hotel.startDay);
    form.append(`hotels[${i}][nights]`, +hotel.nights);
  });
  form.append('imageCover', imageCover);
  if (images.length > 1) {
    form.append('images', images[0]);
    form.append('images', images[1]);
    form.append('images', images[2]);
  }

  for (var value of form.values()) {
    console.log(value);
  }

  return async (dispatch) => {
    dispatch(actions.createTourItemStart());

    try {
      const response = await postTourItem(form);
      console.log(response.data);
      if (response.data.status === 'success') {
        dispatch(actions.createTourItemSuccess());
      }
    } catch (error) {
      dispatch(actions.createTourItemFailure(error.response.data.message));
    }
  };
};
