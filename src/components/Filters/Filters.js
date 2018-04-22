import React from "react";
import FilterLink from "./FilterLink";

const Filters = () => (
  <div>
    <FilterLink filter="ALL">All</FilterLink>
    <FilterLink filter="ACTIVE">Active</FilterLink>
    <FilterLink filter="COMPLETED">Completed</FilterLink>
  </div>
);

export default Filters;
