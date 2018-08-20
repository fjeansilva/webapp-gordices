/* global jest */
let storeResponse;
export const setMockStoreRequest = response => {
  storeResponse = response;
};

const handleResponse = type => {
  if (type === 'error') {
    return Promise.reject(new Error('error message').message);
  }

  return storeResponse;
}

export const getStores = jest.fn(handleResponse);