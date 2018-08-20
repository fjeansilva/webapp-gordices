import { combineReducers } from 'redux';
import dataReducer from './data/reducer';

const storesReducer = combineReducers({
  stores: dataReducer,
});

export default storesReducer;