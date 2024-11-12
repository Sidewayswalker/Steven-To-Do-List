import { combineReducers } from 'redux';
import eventReducer from './event.reducer';
import completedEventReducer from './completed_event.reducer';

const rootReducer = combineReducers({
  events: eventReducer,
  completed_events: completedEventReducer,
});

export default rootReducer;