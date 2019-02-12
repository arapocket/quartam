import { combineReducers } from 'redux';
import SomeReducer from './SomeReducer';

export default combineReducers({
  someData: SomeReducer,
});
