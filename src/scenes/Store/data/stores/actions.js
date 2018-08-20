import {
  GET_STORES,
  START_REQUEST_STORES,
  END_REQUEST_STORES,
  RECEIVE_STORES,
  THROW_ERROR_STORES
} from './constants/ActionTypes';

import * as api from './api';

export const startRequestStores = () => ({ type: START_REQUEST_STORES });
export const endRequestStores = () => ({ type: END_REQUEST_STORES });
export const throwErrorStores = error => ({ type: THROW_ERROR_STORES, error });

export const fetchStores = () => async (dispatch) => {
  dispatch(startRequestStores());
  await api.getStores()
  .then(data => dispatch({ type: RECEIVE_STORES, stores: data}))
  .then(() => dispatch(endRequestStores()))
  .catch(error => dispatch(throwErrorStores(error)));
}
