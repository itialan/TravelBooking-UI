import { combineReducers } from 'redux';

import tourListReducer from './tour/tourList/tourList.reducer';
import destinationReducer from './destination/destination.reducer';
import authReducer from './auth/auth.reducer';

const rootReducer = combineReducers({
  tour: tourListReducer,
  destination: destinationReducer,
  auth: authReducer,
});

export default rootReducer;
