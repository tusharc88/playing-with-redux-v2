import React from "react";
import PropTypes from "prop-types";

const Link = ({ children, onClick }) => (
  <a href="#" onClick={onClick}>
    {children}
  </a>
);

Link.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

Link.defaultProps = {
  children: "",
  onClick: () => {}
};

export default Link;
