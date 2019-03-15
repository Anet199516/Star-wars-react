const BASE_API_URL = 'https://swapi.co/api';

export const getComponents = (url, params = {}) => {
  return fetch(BASE_API_URL + url)
    .then(response => response.json());
};

export const getAllComponents = (path) => {
  return getComponents(path);
};