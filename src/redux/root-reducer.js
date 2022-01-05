import { combineReducers } from 'redux';

import tourReducer from './tour/tour.reducer';
import destinationReducer from './destination/destination.reducer';
import authReducer from './auth/auth.reducer';

const rootReducer = combineReducers({
  tour: tourReducer,
  destination: destinationReducer,
  auth: authReducer,
});

export default rootReducer;
