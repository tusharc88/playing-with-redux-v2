import React from "react";

const FilterLink = ({
  filter,
  currentFilter,
  setVisibilityFilter,
  children
}) => {
  if (currentFilter === filter) {
    return <span>{children}</span>;
  }
  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        setVisibilityFilter(filter);
      }}
    >
      {children}
    </a>
  );
};

export default FilterLink;
