import { getComponents } from './fetch';

export const getAll = () => {
  return getComponents('/people/');
};

export const getById = (personId) => {
  return getComponents(`/people/${personId}`);
};
