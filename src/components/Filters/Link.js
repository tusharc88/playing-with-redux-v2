import React from "react";

const Link = ({ children, onClick }) => (
  <a href="#" onClick={onClick}>
    {children}
  </a>
);

export default Link;
