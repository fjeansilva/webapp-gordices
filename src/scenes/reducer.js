import { combineReducers } from 'redux';

import storeReducer from './Store/data/stores/reducer';

const reducer = combineReducers({ Stores: storeReducer });

export default reducer;