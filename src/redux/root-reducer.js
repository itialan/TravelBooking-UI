import { combineReducers } from 'redux';

import tourListReducer from './tour/tourList/tourList.reducer';
import tourItemReducer from './tour/tourItem/tourItem.reducer';
import destinationReducer from './destination/destination.reducer';
import authReducer from './auth/auth.reducer';

const rootReducer = combineReducers({
  tourList: tourListReducer,
  tourItem: tourItemReducer,
  destination: destinationReducer,
  auth: authReducer,
});

export default rootReducer;
