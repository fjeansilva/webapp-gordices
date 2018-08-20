import { combineReducers } from 'redux';
import storesReducer from './stores/reducer';

const dataReducer = combineReducers({
  stores: storesReducer,
});

export default dataReducer;