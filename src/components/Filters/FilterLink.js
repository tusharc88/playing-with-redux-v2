import React from "react";
import { Link } from "react-router-dom";
import { ALL_FILTER } from "../../constants";

const FilterLink = ({ filter, children }) => (
  <Link
    to={filter === ALL_FILTER ? "" : filter}
    activestyle={{
      textDecoration: "none",
      color: "black"
    }}
  >
    {children}
  </Link>
);

export default FilterLink;
