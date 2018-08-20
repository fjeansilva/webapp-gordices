/* global describe, it, expect, jest */
import {
  GET_STORES,
  START_REQUEST_STORES,
  END_REQUEST_STORES,
  RECEIVE_STORES,
} from '../constants/ActionTypes';

import * as actions from '../actions';
import * as api from '../api';

jest.mock('../api');

describe('Post actions', () => {
  it('fetchStores should dispatch a GET_STORES action', async () => {
    const payload = {
      address: {
          city: "Bras\u00edlia",
          complement: "Residencial Wave",
          neighborhood: "\u00c1guas Claras",
          number: 1,
          state: "df",
          street: "rua 18 norte",
          zipcode: "71910720"
      },
      email: "contato@kicake.com.br",
      name: "KiCake",
      phone: "6199099989",
      social_media: {
          "facebook": "https://facebook.com/kicake",
          "instagram": "https://instagram/kicake",
          "website": "http://www.kicake.com.br"
      }
    };

    api.setMockStoreRequest(Promise.resolve([payload, payload]));
    const dispatch = jest.fn();
    await actions.fetchStores()(dispatch);
    expect(api.getStores).toHaveBeenCalled();
    expect(dispatch.mock.calls).toEqual([
      [{ type: START_REQUEST_STORES }],
      [{ type: RECEIVE_STORES, stores: [payload, payload]}],
      [{ type: END_REQUEST_STORES }],
    ]);
  });
});
