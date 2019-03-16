const BASE_API_URL = 'https://swapi.co/api';

export const getComponents = (url) => {
  return fetch(BASE_API_URL + url)
    .then(response => response.json());
};

const getIdFromUrl = (url) => {
  const [, id] = url.match(/(\d+)\/$/);
  return id;
};

export const getAllComponents = async (path) => {
  const data = await getComponents(path);
  data.results = data.results.map(item => ({
    ...item,
    id: getIdFromUrl(item.url),
  }));
  return data;
};

export const getDetails = async (path) => {
  const someDetails = await getComponents(path);
  return someDetails;
};
