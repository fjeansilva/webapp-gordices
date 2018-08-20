import fetch from 'cross-fetch';

export const getStores = () =>
  fetch(`http://localhost:5000/firecast-fa179/us-central1/getStores`)
    .then(data => data.json())
    .then(data => data)
    .catch(err => err);