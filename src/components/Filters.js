import React from "react";
import FilterLink from "./FilterLink";

const Filters = ({ visibilityFilter, setVisibilityFilter }) => (
  <div>
    <FilterLink
      filter="ALL"
      currentFilter={visibilityFilter}
      setVisibilityFilter={filter => setVisibilityFilter(filter)}
    >
      All
    </FilterLink>
    <FilterLink
      filter="ACTIVE"
      currentFilter={visibilityFilter}
      setVisibilityFilter={filter => setVisibilityFilter(filter)}
    >
      Active
    </FilterLink>
    <FilterLink
      filter="COMPLETED"
      currentFilter={visibilityFilter}
      setVisibilityFilter={filter => setVisibilityFilter(filter)}
    >
      Completed
    </FilterLink>
  </div>
);

export default Filters;
