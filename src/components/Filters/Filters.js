import React from 'react';
import FilterLink from './FilterLink';
import { ALL_FILTER, ACTIVE_FILTER, COMPLETED_FILTER } from '../../constants';

const Filters = () => (
  <div>
    <FilterLink filter={`/${ALL_FILTER}`}>All</FilterLink>
    <FilterLink filter={`/${ACTIVE_FILTER}`}>Active</FilterLink>
    <FilterLink filter={`/${COMPLETED_FILTER}`}>Completed</FilterLink>
  </div>
);

export default Filters;
