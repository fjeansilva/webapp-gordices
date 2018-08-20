import {
  START_REQUEST_STORES,
  END_REQUEST_STORES,
  RECEIVE_STORES,
  THROW_ERROR_STORES
} from './constants/ActionTypes';

const initialState = {};

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_REQUEST_STORES:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_STORES:
      return {
        ...state,
        stores: action.stores,
      };
    case END_REQUEST_STORES:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default storeReducer;