import React from 'react';
import { Link } from 'react-router-dom';

export const charactersColumnConfig = {
  checkbox: {
    title: '',
    render: () => (
      <input type="checkbox" />
    ),
  },
  image: {
    title: 'Picture',
    render: person => (
      <img className="image" src={`https://starwars-visualguide.com/assets/img/characters/${person.id}.jpg`} />
    ),
  },
  name: {
    title: 'Name',
    isSortable: true,
    isSearchable: true,
    render: person => (
      <Link to={`/people/${person.id}`}>{person.name}</Link>
    ),
  },
  mass: {
    title: 'Mass',
    isSortable: true,
  },
  hair_color: {
    title: 'Hair Color',
  },
  birth_year: {
    title: 'Born',
    isSortable: true,
  },
  gender: {
    title: 'Gender',
  },
  height: {
    title: 'Height',
  },
  species: {
    title: 'Species',
  },
  homeworld: {
    title: 'Homeworld ',
  },
  skin_color: {
    title: 'Skin Color',
  },
};

export const filmsColumnConfig = {
  checkbox: {
    title: '',
    render: () => (
      <input type="checkbox" />
    ),
  },
  image: {
    title: 'Picture',
    render: film => (
      <img className="image" src={`https://starwars-visualguide.com/assets/img/films/${film.id}.jpg`} />
    ),
  },
  title: {
    title: 'Title',
    isSortable: true,
    isSearchable: true,
    render: film => (
      <Link to={`/films/${film.id}`}>{film.title}</Link>
    ),
  },
  episode_id: {
    title: 'Episode Id',
    isSortable: true,
  },
  opening_crawl: {
    title: 'Opening_crawl',
    isSearchable: true,
  },
  director: {
    title: 'Director',
    isSortable: true,
  },
  producer: {
    title: 'Producer',
    isSortable: true,
  },
  release_date: {
    title: 'Release Date',
  },
};

export const planetsColumnConfig = {
  checkbox: {
    title: '',
    render: () => (
      <input type="checkbox" />
    ),
  },
  image: {
    title: 'Picture',
    render: planet => (
      <img className="image" src={`https://starwars-visualguide.com/assets/img/planets/${planet.id}.jpg`} />
    ),
  },
  name: {
    title: 'Name',
    isSortable: true,
    isSearchable: true,
    render: planet => (
      <Link to={`/planets/${planet.id}`}>{planet.name}</Link>
    ),
  },
  diameter: {
    title: 'Diameter',
    isSortable: true,
  },
  rotation_period: {
    title: 'Rotation Period',
    isSortable: true,
  },
  orbital_period: {
    title: 'Orbital Period',
    isSortable: true,
  },
  gravity: {
    title: 'Gravity',
    isSortable: true,
  },
  population: {
    title: 'Population',
    isSortable: true,
  },
  climate: {
    title: 'Climate',
    isSearchable: true,
  },
  surface_water: {
    title: 'Surface Water',
  },
};

export const speciesColumnConfig = {
  checkbox: {
    title: '',
    render: () => (
      <input type="checkbox" />
    ),
  },
  image: {
    title: 'Picture',
    render: species => (
      <img className="image" src={`https://starwars-visualguide.com/assets/img/species/${species.id}.jpg`} />
    ),
  },
  name: {
    title: 'Name',
    isSortable: true,
    isSearchable: true,
    render: spacies => (
      <Link to={`/species/${spacies.id}`}>{spacies.name}</Link>
    ),
  },
  classification: {
    title: 'Classification',
    isSortable: true,
  },
  designation: {
    title: 'Designation',
    isSortable: true,
  },
  average_height: {
    title: 'Average_height',
    isSortable: true,
  },
  average_lifespan: {
    title: 'Average Lifespan',
    isSortable: true,
  },
  hair_colors: {
    title: 'Hair Colors',
    isSortable: true,
    isSearchable: true,
  },
  skin_colors: {
    title: 'Skin Colors',
    isSortable: true,
    isSearchable: true,
  },
  language: {
    title: 'Language',
    isSearchable: true,
  },
};

export const starshipsColumnConfig = {
  checkbox: {
    title: '',
    render: () => (
      <input type="checkbox" />
    ),
  },
  image: {
    title: 'Picture',
    render: starship => (
      <img className="image" src={`https://starwars-visualguide.com/assets/img/starships/${starship.id}.jpg`} />
    ),
  },
  name: {
    title: 'Name',
    isSortable: true,
    isSearchable: true,
    render: starship => (
      <Link to={`/starships/${starship.id}`}>{starship.name}</Link>
    ),
  },
  model: {
    title: 'Model',
    isSearchable: true,
  },
  starship_class: {
    title: 'Starship Class',
    isSortable: true,
  },
  manufacturer: {
    title: 'Manufacturer',
    isSortable: true,
  },
  cost_in_credits: {
    title: 'Cost in credits',
    isSortable: true,
  },
  length: {
    title: 'Length',
    isSortable: true,
  },
  passengers: {
    title: 'Passengers',
    isSearchable: true,
  },
  max_atmosphering_speed: {
    title: 'Max atmosphering speed',
    isSearchable: true,
  },
};

export const vehiclesColumnConfig = {
  checkbox: {
    title: '',
    render: () => (
      <input type="checkbox" />
    ),
  },
  image: {
    title: 'Picture',
    render: vehicle => (
      <img className="image" src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.id}.jpg`} />
    ),
  },
  name: {
    title: 'Name',
    isSortable: true,
    isSearchable: true,
    render: vehicle => (
      <Link to={`/vehicles/${vehicle.id}`}>{vehicle.name}</Link>
    ),
  },
  model: {
    title: 'Model',
    isSearchable: true,
  },
  vehicle_class: {
    title: 'Starship Class',
    isSortable: true,
  },
  manufacturer: {
    title: 'Manufacturer',
    isSortable: true,
  },
  cost_in_credits: {
    title: 'Cost in credits',
    isSortable: true,
  },
  length: {
    title: 'Length',
    isSortable: true,
  },
  passengers: {
    title: 'Passengers',
    isSearchable: true,
  },
  max_atmosphering_speed: {
    title: 'Max atmosphering speed',
    isSearchable: true,
  },
};
