import React from 'react';
import { NavLink } from 'react-router-dom';
import { ALL_FILTER } from '../../constants';

const FilterLink = ({ filter, children }) => (
  <NavLink
    exact
    to={filter === `/${ALL_FILTER}` ? '/' : filter}
    activeStyle={{ color: 'black', textDecoration: 'none' }}
  >
    {children}
  </NavLink>
);

export default FilterLink;
