import { getComponents } from './fetch';

export const getAllFilms = () => {
  return getComponents('/films/');
};

export const getAllCharacters = () => {
  return getComponents('/people/');
};

export const getAllPlanets = () => {
  return getComponents('/planets/');
};

export const getAllSpecies = () => {
  return getComponents('/species/');
};

export const getAllStarships = () => {
  return getComponents('/starships/');
};

export const getAllVehicles = () => {
  return getComponents('/vehicles/');
};

// export const getById = (personId) => {
//   return getComponents(`/people/${personId}`);
// };
