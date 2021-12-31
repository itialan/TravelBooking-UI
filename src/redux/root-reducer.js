import { combineReducers } from 'redux';

import tourReducer from './tour/tour.reducer';
import destinationReducer from './destination/destination.reducer';

const rootReducer = combineReducers({
  tour: tourReducer,
  destination: destinationReducer,
});

export default rootReducer;
